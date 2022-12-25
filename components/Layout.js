import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
    <div className="bg-yellow-100">
      <MobileNav />
      <DesktopNav />
      <div className="min-h-screen my-10">
      {children}
      </div>
      <Footer />
    </div>
    </>
  );
}