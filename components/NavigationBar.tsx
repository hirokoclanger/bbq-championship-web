import Link from "next/link";
import Image from "next/image";
import {useState} from 'react';



export default function NavigationBar(){

    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
        return(

                <div className="py-4 w-full ">
                <div className="lg:flex items-center sm:justify-between justify-center lg:flex-nowrap flex-wrap ">
                    <div className="lg:w-11/12">
                        <div className="flex gap-2  py-2 items-center pl-4">
                            <Link className="text-3xl sm:flex hidden font-bold text-gray-200 transition-colors duration-500 transform dark:text-white lg:text-3xl hover:text-orange-400" href="/">Grillmeisterschaft </Link>
                           <Link className="text-3xl sm:flex hidden font-bold text-gray-200 transition-colors duration-500 transform dark:text-white lg:text-3xl hover:text-orange-400" href="/"> Poing</Link>
                           <Image src="/img/logo.png" className="sm:flex hidden" height={32} width={55} />
                           
                          
                        </div>
                    </div>
                    <div className="lg:flex hidden lg:text-md text-sm" >  
                        <div className="flex flex-col bg-transparent text-gray-300 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center">
                        <Link href="/news" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">news</Link>
                        <Link href="/sponsors" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">sponsoren</Link>
                        <Link href="/events" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">events</Link>
                        <Link href="/about" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">informationen</Link>
                        <Link href="/contact" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">anmeldung</Link>
                        </div>
                    </div>
                    <button className="sm:hidden " onClick={toggle} > <Image src="/img/logo.png" className="sm:hidden" height={132} width={155} /></button>
                    <div  style={{display: showMe?"flex":"none"}} className=" sm:hidden hidden lg:text-md text-sm">  
                        <div className="flex flex-col bg-transparent text-gray-300 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center">
                        <Link href="/news" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">news</Link>
                        <Link href="/sponsors" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">sponsoren</Link>
                        <Link href="/events" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">events</Link>
                        <Link href="/about" className="mt-2 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">informationen</Link>
                        <Link href="/contact" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-orange-400">anmeldung</Link>
                        </div>
                    </div>
                   
                    
                    
                    
                </div>
            </div>
        );
    }
