import Footer from "@ui/user/organisms/Footer";
import Navbar from "@ui/user/organisms/Navbar";
import { Outlet } from "react-router-dom";
const UserTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className=" flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserTemplate;
