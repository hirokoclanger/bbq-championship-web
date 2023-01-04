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
        <div className="flex h-[85vh] flex-nowrap  sm:pl-0 pl-8 bg-black/25">
          <div className="bg-grill4 sm:flex  hidden bg-cover w-4/12 "></div>
          <div className="py-5  w-11/12 ">
            <LandingView />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
