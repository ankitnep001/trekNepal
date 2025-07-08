import NavbarLoginIcon from "../atom/NavbarIcons";
import NavMenu from "../atom/NavMenu";
import Logo from "../molecules/Logo";

const ResponsiveMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gradient-to-b from-black via-gray-900 to-black p-6 gap-y-10 text-white">
      <NavbarLoginIcon showCart={false} />
      <div className="flex flex-col gap-y-20">
        <Logo />

        <NavMenu flexRow={false} />
      </div>
    </div>
  );
};

export default ResponsiveMenu;
