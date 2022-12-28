import Link from "next/link";
export default function LandingView(){

   return (
    <div className=" w-full h-[90vh] flex items-center " id="home_">
        
            <div className="content text-gray-800">
            <h3 className="text-4xl font-extrabold uppercase">Grillmeisterschaft Poing</h3>
            <div className="w-20 h-1 my-9 bg-gray-800"> </div>
            <div className="lg:text-2xl text-lg">
                <div className="flex gap-2">
                      <h3 className="text-orange-400" >Die BBQ Meisterschaft </h3>
                      <h3 className="font-bold ">im Herzen Bayerns</h3>
                </div>
                <div className="mt-8 py-4 text-center w-40 bg-gray-800 text-white justify-center font-semibold text-sm">
                    <Link href="/about">Get in Touch</Link>
                </div>
            </div>
        </div>
    </div>
   );
}