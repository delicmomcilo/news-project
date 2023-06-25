import { ReactNode } from "react";

const DesktopWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="pt-4" />
      {children}
    </div>
  );
};

export default DesktopWrapper;
