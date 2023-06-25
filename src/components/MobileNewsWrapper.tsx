import { ReactNode } from "react";

const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{ scrollSnapType: "y mandatory" }}
      className="max-h-screen overflow-y-scroll flex flex-col gap-16 items-center p-4"
    >
      {children}
    </div>
  );
};

export default MobileWrapper;
