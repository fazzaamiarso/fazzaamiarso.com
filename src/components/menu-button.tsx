import type { ReactNode } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// focus is trapped inside the popover
export default function MenuButton({ children }: { children: ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="sm:hidden" variant="outline">
          Menu <HamburgerMenuIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen sm:hidden">{children}</PopoverContent>
    </Popover>
  );
}
