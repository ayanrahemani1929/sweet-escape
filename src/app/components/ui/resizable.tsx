"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "./utils";

function ResizablePanelGroup({
  className,
  direction = "vertical",
  ...props
}: React.ComponentProps<typeof Group> & { direction?: "horizontal" | "vertical" }) {
  return (
    <Group
      data-slot="resizable-panel-group"
      orientation={direction}             // v4 uses `orientation` instead of `direction`
      className={cn(
        "flex h-full w-full",
        direction === "vertical" ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanel({
  children,
  ...props
}: React.ComponentProps<typeof Panel>) {
  return (
    <Panel data-slot="resizable-panel" {...props}>
      {children}
    </Panel>
  );
}

function ResizableHandle({
  withHandle = true,
  className,
  ...props
}: { withHandle?: boolean; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return withHandle ? (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <GripVerticalIcon className="size-2.5" />
    </Separator>
  ) : null;
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
