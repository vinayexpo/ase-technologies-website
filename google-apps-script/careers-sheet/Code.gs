const SHEET_NAME = "Careersheet";
const RESUME_FOLDER_NAME = "ASE Careers Resumes";
const SPREADSHEET_ID_PROPERTY = "CAREERS_SPREADSHEET_ID";
const RESUME_FOLDER_PROPERTY = "CAREERS_RESUME_FOLDER_ID";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_POSITIONS = [
  "B2B Sales Manager",
  "Business Development Manager",
  "Business Development Associate",
];
const HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Position",
  "Portfolio",
  "Message",
  "Resume File Name",
  "Resume URL",
];

function setupCareersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error(
      "Open the destination spreadsheet, then run setupCareersSheet from its bound Apps Script project."
    );
  }

  PropertiesService.getScriptProperties().setProperty(
    SPREADSHEET_ID_PROPERTY,
    spreadsheet.getId()
  );
  getOrCreateCareersSheet(spreadsheet);
  const folder = getOrCreateResumeFolder();
  Logger.log(
    'Setup complete. Spreadsheet: "%s". Sheet tab: "%s". Resume folder: "%s".',
    spreadsheet.getName(),
    SHEET_NAME,
    folder.getUrl()
  );
}

function getOrCreateCareersSheet(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const lastColumn = sheet.getLastColumn();
  const existingHeaders = lastColumn
    ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0]
    : [];
  if (existingHeaders.every((header) => !header)) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  } else {
    assertHeaders(sheet);
  }
  return sheet;
}

function getOrCreateResumeFolder() {
  const properties = PropertiesService.getScriptProperties();
  const folderId = properties.getProperty(RESUME_FOLDER_PROPERTY);
  if (folderId) {
    try {
      return DriveApp.getFolderById(folderId);
    } catch (error) {
      console.warn("Configured resume folder is unavailable. Creating a replacement.", error);
    }
  }

  const folder = DriveApp.createFolder(RESUME_FOLDER_NAME);
  properties.setProperty(RESUME_FOLDER_PROPERTY, folder.getId());
  return folder;
}

function getConfiguredSpreadsheet() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty(
    SPREADSHEET_ID_PROPERTY
  );
  if (!spreadsheetId) {
    throw new Error(
      "The destination spreadsheet is not configured. Run setupCareersSheet from the target spreadsheet first."
    );
  }
  return SpreadsheetApp.openById(spreadsheetId);
}

function doGet() {
  return jsonResponse({ ok: true, message: "Careers application endpoint is ready." });
}

function doPost(event) {
  let resumeFile;
  const lock = LockService.getScriptLock();
  try {
    if (!event || !event.postData || !event.postData.contents) {
      throw new Error("Request body is missing.");
    }

    const payload = JSON.parse(event.postData.contents);
    const fullName = requiredText(payload.fullName, "Full Name", 120);
    const email = requiredText(payload.email, "Email", 254);
    const phone = optionalText(payload.phone, 30);
    const position = requiredText(payload.position, "Position", 100);
    const portfolio = optionalText(payload.portfolio, 2048);
    const message = optionalText(payload.message, 2000);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Email address is invalid.");
    }
    if (ALLOWED_POSITIONS.indexOf(position) === -1) {
      throw new Error("Selected position is not available.");
    }

    const resume = payload.resume;
    if (!resume || typeof resume.base64 !== "string" || !resume.base64) {
      throw new Error("Resume file is required.");
    }
    const fileName = safeFileName(resume.name);
    const mimeType = resumeMimeType(fileName, resume.mimeType);
    const bytes = Utilities.base64Decode(resume.base64);
    if (!bytes.length || bytes.length > MAX_RESUME_BYTES) {
      throw new Error("Resume must be no larger than 5 MB.");
    }

    lock.waitLock(30000);
    const sheet = getOrCreateCareersSheet(getConfiguredSpreadsheet());
    const folder = getOrCreateResumeFolder();
    resumeFile = folder.createFile(Utilities.newBlob(bytes, mimeType, fileName));

    const row = {
      "Timestamp": new Date(),
      "Full Name": safeCellValue(fullName),
      "Email": safeCellValue(email),
      "Phone": safeCellValue(phone),
      "Position": safeCellValue(position),
      "Portfolio": safeCellValue(portfolio),
      "Message": safeCellValue(message),
      "Resume File Name": safeCellValue(fileName),
      "Resume URL": '=HYPERLINK("' + resumeFile.getUrl() + '","Open resume")',
    };
    sheet.appendRow(HEADERS.map((header) => row[header]));
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    if (resumeFile) {
      try {
        resumeFile.setTrashed(true);
      } catch (cleanupError) {
        console.error(cleanupError);
      }
    }
    return jsonResponse({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function assertHeaders(sheet) {
  const lastColumn = sheet.getLastColumn();
  const actual = lastColumn
    ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0]
    : [];
  if (actual.length !== HEADERS.length || HEADERS.some((header, index) => actual[index] !== header)) {
    throw new Error(
      'Header row must exactly match: ' + HEADERS.join(" | ")
    );
  }
}

function requiredText(value, label, maxLength) {
  const result = optionalText(value, maxLength);
  if (!result) {
    throw new Error(label + " is required.");
  }
  return result;
}

function optionalText(value, maxLength) {
  const result = value == null ? "" : String(value).trim();
  if (result.length > maxLength) {
    throw new Error("A submitted field is longer than allowed.");
  }
  return result;
}

function safeCellValue(value) {
  return /^[\s]*[=+\-@]/.test(value) ? "'" + value : value;
}

function safeFileName(value) {
  const name = String(value || "").split(/[\\/]/).pop().replace(/[\u0000-\u001f]/g, "").trim();
  if (!name || name.length > 150) {
    throw new Error("Resume filename is invalid.");
  }
  return name;
}

function resumeMimeType(fileName, declaredMimeType) {
  const extension = fileName.toLowerCase().split(".").pop();
  const mimeTypes = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };
  const mimeType = mimeTypes[extension];
  if (!mimeType) {
    throw new Error("Resume must be a PDF, DOC, or DOCX file.");
  }

  const declared = String(declaredMimeType || "").toLowerCase();
  if (declared && declared !== mimeType && declared !== "application/octet-stream") {
    throw new Error("Resume file type does not match its filename.");
  }
  return mimeType;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
