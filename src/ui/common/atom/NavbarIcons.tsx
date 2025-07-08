import { CarTaxiFrontIcon, User2Icon } from "lucide-react";

interface NavbarLoginIconProps {
  showLogin?: boolean;
  showCart?: boolean;
}
const NavbarLoginIcon = ({
  showCart = true,
  showLogin = true,
}: NavbarLoginIconProps) => {
  return (
    <div className="flex justify-center items-center gap-x-3 text-white">
      {showLogin && (
        <div className="flex gap-x-2">
          <User2Icon />
          <p className="text-white text-xl">Login</p>
        </div>
      )}

      {showCart && (
        <div className="flex gap-x-2 text-xl">
          <CarTaxiFrontIcon />
          <p className="text-white">Cart</p>
        </div>
      )}
    </div>
  );
};

export default NavbarLoginIcon;
