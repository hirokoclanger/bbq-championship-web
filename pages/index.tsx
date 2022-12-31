import Headr from "../components/Head";
import LandingView from "../components/LandingView";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Headr />
      <main className="px-16 h-[100vh]">
        <Navbar />
        <div className="sm:flex flex-col-2 h-[85vh] sm:gap-10 sm:pl-0 pl-8 bg-black/25">
          <div className="bg-grill4 bg-cover w-5/12 "></div>
          <div className="px-2 py-5 ">
            <LandingView />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
