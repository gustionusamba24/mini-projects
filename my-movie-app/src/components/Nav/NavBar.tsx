import { Logo } from "./Logo";
import { NumResult } from "./NumResult";
import { Search } from "./Search";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
};
