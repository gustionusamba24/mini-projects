import { Logo } from "./Logo";
import { ReactNode } from "react";

export const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};
