import NavbarIcons from "@ui/common/atom/NavbarIcons";
import NavMenu from "@ui/common/atom/NavMenu";
import Logo from "@ui/common/molecules/Logo";
import SearchBar from "@ui/common/molecules/SearchBar";
import ResponsiveMenu from "@ui/common/organism/ResponsiveMenu";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className=" w-full flex flex-row items-center justify-around bg-black px-1 md:px-8 py-3 md:py-5 gap-x-5 ">
      <Logo />
      <div className="hidden md:flex flex-row gap-x-10">
        <NavMenu />
        <SearchBar />
        <NavbarIcons />
      </div>

      {/* mobile menu icon */}
      <div className="block md:hidden absolute right-0.5 z-50">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X color="white" /> : <MenuIcon color="white" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 overflow-y-auto">
          <ResponsiveMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
