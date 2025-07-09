import { navbarMenu } from "@data/navbarMenu";

interface MenuProps {
  flexRow?: boolean;
  showSubMenu?: boolean;
}

const NavMenu = ({ flexRow = true, showSubMenu = true }: MenuProps) => {
  return (
    <ul
      className={`md:hidden lg:flex ${
        flexRow ? "flex-row gap-x-10" : "flex-col gap-y-8"
      } justify-center items-center text-xl text-white  `}
    >
      {navbarMenu.map((item, index) => (
        <li key={index} className="relative group ">
          <button className="transition duration-200 cursor-pointer">
            {item.label}
          </button>

          {/*Render submenu only if showSubMenu is true */}
          {showSubMenu && item.subMenu && (
            <ul className="absolute top-full bg-black text-white rounded-md shadow-md w-48 py-2 hidden group-hover:block z-50">
              {item.subMenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="px-4 py-2 hover:bg-gray-700 text-base transition duration-150"
                >
                  <button className="w-full text-left">{subItem}</button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
