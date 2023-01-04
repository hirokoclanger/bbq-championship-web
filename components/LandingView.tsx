import Link from "next/link";
export default function LandingView() {
  return (
    <div className="w-full px-10 h-[90vh] flex items-center " id="home_">
      <div className=" text-gray-300">
        <h3 className="lg:text-4xl text-2xl font-extrabold uppercase">
          Grillmeisterschaft Poing
        </h3>
        <div className="w-20 h-1 my-9 bg-gray-300"> </div>
        <div className="lg:text-2xl text-xs">
          <div className="flex gap-2">
            <h3 className="text-orange-400">Die BBQ Meisterschaft </h3>
            <h3 className="font-bold ">im Herzen Bayerns</h3>
          </div>
          <div className="mt-8 lg:py-4 py-2 duration-300 text-center text-black w-40 bg-gray-300 hover:bg-orange-400  justify-center font-semibold lg:text-sm text-xs">
            <Link href="/information">Mehr Informationen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
