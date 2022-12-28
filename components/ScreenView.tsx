import Image from "next/image";
export default function ScreenView(){
    return(
        <div className="container relative mx-auto ">
        <div className="item-center flex flex-wrap justify-center py-20">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className=" bg-slate-50/75 px-12 py-10 ">
              <Image src="/img/logo.png" height={320} width={520} alt={"logo"} />
              <h1 className="text-black font-semibold text-5xl">
                Willkommen zu Grillmeisterschaft in Poing
                  </h1>
              <p className="mt-4 text-lg text-gray-600">
                Seit 2013 tragen veranstalten wir Jaehrlich ein Event, bei dem sich Team bei Ihrem BBQ koennen messen.
                  </p>
            </div>
          </div>
    
        </div>
      </div>
      
    );

}