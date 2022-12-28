import Link from "next/link";
import Image from "next/image";
export default function NavigationBar(){
        return(

                <div className="py-4 w-full">
                <div className=" flex items-center justify-center lg:flex-nowrap flex-wrap ">
                    <div className="lg:w-11/12">
                        <div className="flex gap-2 py-2 items-center">
                            <Link className="text-3xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">Grillmeisterschaft Poing</Link>
                            <Image src="/img/logo.png" height={32} width={55} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col bg-transparent text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center">
                            <Link href="/news" className="mt-2 transition-colors duration-300 transform lg:mt-0  hover:text-gray-900 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-black">news</Link>
                            <Link href="/sponsors" className="mt-2 transition-colors duration-300 transform lg:mt-0  hover:text-gray-900 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-black">sponsoren</Link>
                            <Link href="/events" className="mt-2 transition-colors duration-300 transform lg:mt-0  hover:text-gray-900 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-black">events</Link>
                            <Link href="/about" className="mt-2 transition-colors duration-300 transform lg:mt-0  hover:text-gray-900 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-black">informationen</Link>
                            <Link href="/contact" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 w-auto hover:text-white py-2 px-5  text-center justify-center hover:bg-black">kontakt</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
