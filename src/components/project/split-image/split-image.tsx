import { useState, type ReactNode } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function SplitImage({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 items-start gap-4">{children}</div>;
}

export function SplitContent({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export function SplitItem({ src, children }: { src: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="w-full" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <Lightbox
          plugins={[Zoom]}
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src }]}
          render={{ buttonNext: () => null, buttonPrev: () => null }}
        />
      )}
    </div>
  );
}
