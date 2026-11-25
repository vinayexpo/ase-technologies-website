# Careers applications to Google Sheets

## Names

- Sheet tab: **Careersheet**
- Apps Script project: **ASE Careers Applications**
- Resume folder in Google Drive: **ASE Careers Resumes** (created automatically)

The script does not contain a spreadsheet ID. When you run setup, it automatically saves the ID of the spreadsheet that contains the Apps Script project. It also creates and remembers the Drive folder for resumes.

## Sheet header row

The script creates the header row when the `Careersheet` tab is empty. If you enter it yourself, put these exact labels in row 1, in this order:

```text
Timestamp | Full Name | Email | Phone | Position | Portfolio | Message | Resume File Name | Resume URL
```

The script checks the exact header names and order before accepting each application.

## Install and deploy

1. Open the spreadsheet where you want applications to be saved, then select **Extensions → Apps Script**. This binds the script to that spreadsheet.
2. Name the project **ASE Careers Applications**.
3. Replace the editor contents with [`Code.gs`](./Code.gs), then save.
4. Choose `setupCareersSheet` in the function list and click **Run**. Approve the requested Sheets and Drive permissions. The script automatically saves this spreadsheet's ID, creates or verifies the `Careersheet` tab, and creates the private resume folder.
5. Click **Deploy → New deployment → Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and authorize. The web app needs public access so the website can submit without visitors signing in.
6. Copy the deployed URL ending in `/exec`. The website is currently configured with the supplied URL. If you deploy another Apps Script version, set its URL as `VITE_CAREERS_SHEETS_WEB_APP_URL` in the local `.env.local` and production build environment. For local setup, copy `.env.example` to `.env.local` first.
7. Rebuild and deploy the website. After changing Apps Script code later, create a new deployment version for the live endpoint.

The resume itself is stored in the owner's Google Drive folder; the spreadsheet row contains its Drive link. Resume files remain private in that owner's Drive, so only people who already have Drive access can open the links in the sheet. Since Apps Script does not provide a browser-readable cross-origin response for this request, the website can confirm that the request was sent but cannot display server-side validation errors.
