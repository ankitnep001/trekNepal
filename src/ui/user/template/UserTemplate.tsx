import Footer from "@ui/user/organisms/Footer";
import Navbar from "@ui/user/organisms/Navbar";
import { Outlet } from "react-router-dom";
const UserTemplate = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserTemplate;
