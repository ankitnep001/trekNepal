import NavMenu from "@ui/common/atom/NavMenu";
import FollowUs from "@ui/common/molecules/FollowUs";
import Logo from "@ui/common/molecules/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col items-center justify-around bg-black px-1 md:px-8 py-4 md:py-5 gap-x-5 gap-y-5">
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-y-10">
        <div className=" flex flex-col justify-center items-center gap-y-4">
          <Logo />
          <NavMenu flexRow={false} showSubMenu={false} />
        </div>

        <div>
          <FollowUs />
        </div>
      </div>
      <hr className="w-full border border-white" />
      <p className="text-lg md:text-xl text-white tracking-wider">
        Copyright © {currentYear} TrekNepal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
