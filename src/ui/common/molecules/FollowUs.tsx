import { socialMedia } from "@data/socialMedia";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const iconMap = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5 text-white">
      <h2 className="text-lg md:text-2xl underline ">Follow US</h2>
      {socialMedia.map(({ key, name, icon, link }) => {
        const Icon = iconMap[icon as keyof typeof iconMap];
        return (
          <Link
            key={key}
            to={link}
            className="flex items-center gap-x-2 hover:text-gray-600 transition"
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
