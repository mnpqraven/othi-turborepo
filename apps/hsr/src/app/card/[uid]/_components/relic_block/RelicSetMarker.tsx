import { cn } from "lib/utils";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

export const RelicSetMarker = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    className={cn("h-2 w-2 rounded-full bg-green-600", className)}
    ref={ref}
    style={{
      boxShadow: "0 0 5px 1px rgb(22 163 74)",
    }}
    {...props}
  />
));
RelicSetMarker.displayName = "MarkerIcon";
