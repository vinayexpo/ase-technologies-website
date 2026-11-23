import { Badge } from "@/components/ui/badge";

export function WebAppMock() {
  return (
    <div className="min-w-0 flex-1 rounded-lg bg-surface-bright p-3 shadow-elevation-md">
      <div className="flex items-center gap-2 pb-3">
        <span className="size-2 rounded-full bg-outline-variant" />
        <span className="size-2 rounded-full bg-outline-variant" />
        <span className="size-2 rounded-full bg-outline-variant" />
        <span className="h-6 min-w-0 flex-1 rounded-full bg-surface-container" />
      </div>
      <div className="rounded-md bg-surface-container p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-label-md text-on-surface">Orders</p>
          <Badge variant="primary">Live</Badge>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-outline-variant py-2">
          <span className="text-label-sm text-on-surface-variant">New order</span>
          <span className="size-2 rounded-full bg-outline-variant" />
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-outline-variant py-2">
          <span className="text-label-sm text-on-surface-variant">Shipped</span>
          <span className="size-2 rounded-full bg-outline-variant" />
        </div>
      </div>
    </div>
  );
}

export function MobileAppMock() {
  return (
    <div className="w-32 shrink-0 rounded-[18px] border border-outline-variant bg-surface-bright p-2 shadow-elevation-md">
      <div className="flex justify-center pb-2">
        <span className="h-1 w-8 rounded-full bg-outline-variant" />
      </div>
      <p className="text-label-sm text-on-surface-variant">Today</p>
      <div className="mt-2 rounded-md bg-primary-container p-2">
        <p className="text-title-lg text-on-primary-container">3</p>
        <p className="text-label-sm text-on-primary-container">orders</p>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-label-sm text-on-surface-variant">Shipped</span>
        <span className="size-2 rounded-full bg-outline-variant" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-label-sm text-on-surface-variant">Review</span>
        <span className="size-2 rounded-full bg-outline-variant" />
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-label-sm text-on-surface-variant">Live</span>
        <span className="size-2 rounded-full bg-primary" />
      </div>
    </div>
  );
}

export function AppMock() {
  return (
    <div className="flex items-end gap-4">
      <WebAppMock />
      <MobileAppMock />
    </div>
  );
}
