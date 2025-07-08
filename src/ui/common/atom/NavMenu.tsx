import { navbarMenu } from "@data/navbarMenu";

interface MenuProps {
  flexRow?: boolean;
}

const NavMenu = ({ flexRow = true }: MenuProps) => {
  return (
    <ul
      className={`flex ${
        flexRow ? "flex-row gap-x-10" : "flex-col gap-y-10"
      } justify-center items-center text-xl text-white `}
    >
      {navbarMenu.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
          <button className="transition duration-200 ">{item.label}</button>

          {/* Submenu dropdown */}
          {item.subMenu && (
            <ul className="absolute  top-full  bg-black text-white rounded-md shadow-md w-48 py-2 hidden group-hover:block z-50">
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
