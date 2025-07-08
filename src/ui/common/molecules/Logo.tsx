import { Mountain } from "lucide-react";

interface LogoProps {
  textColor?: string;
  icon?: boolean;
}

const Logo = ({ textColor = "text-[#f2f2f2]", icon = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-2 font-bold ">
      {icon && (
        <span className="text-[#f2f2f2]">
          <Mountain size={30} />
        </span>
      )}
      <p className={`${textColor} text-4xl tracking-wide`}>
        <span className="text-gray-600 ">Trek</span>Nepal
      </p>
    </div>
  );
};

export default Logo;
