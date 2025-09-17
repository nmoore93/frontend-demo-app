import type { ReactNode } from "react";

import { NavigationPanel } from "../../features/navigation-panel";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-[#FFFCEA]">
      <NavigationPanel />
      {children}
    </div>
  );
};
