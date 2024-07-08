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

export function SplitItem({ src }: { src: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <img src={src} alt="" className="w-full" onClick={() => setIsOpen(true)} />
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
