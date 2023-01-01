import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
    <div className="bg-white">
      <MobileNav />
      <DesktopNav />
      <div className="min-h-screen">
      {children}
      </div>
      <Footer />
    </div>
    </>
  );
}