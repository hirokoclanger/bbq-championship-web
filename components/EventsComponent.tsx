import Link from "next/link";
import Image from "next/image";

function toMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  // 👇️ using visitor's default locale
  return date.toLocaleString([], {
    month: "long",
  });
}

export default function EventsComponenent ({
    slugevent,
    eventTitle,
    gewinner,
    location,
    facebooklink,
    markdown,
    preisgelder,
    teilnehmer,
    dateEvent,
    eventcoverPhoto,
    eventDetails 
}) {


  return (
           
           <div className="flex flex-col  items-center p-8 
            transition-colors hover:text-slate-200 duration-300 transform border cursor-pointer 
            border-transparent group hover:bg-black/25  hover:border-transparent">
 
   <div
            className="mt-4 mx-auto w-full "
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
            }}
          >
            <Image
              src={eventcoverPhoto.url}
              fill
              objectFit="cover"
              alt={eventcoverPhoto.fileName}
            />
          </div>
                <h1 className="mt-4 text-xl text-center font-semibold text-slate-100 capitalize dark:text-white group-hover:text-white">
        <Link
          className="lg:text-2xl font-bold   hover:underline"
          href={"/events/" + slugevent}> {eventTitle} 
        </Link>
                </h1>
                <p className="mt-2 text-slate-300 capitalize dark:text-gray-300 group-hover:text-gray-300">{location}</p>

                <div className="flex mt-3 -mx-2">
                    
                    <a href={facebooklink} className="mx-2 text-orange-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>

                                   </div>
                                   <div className="pt-4 text-slate-100">
                                   Gewinner:<b> {gewinner} </b>
                                   </div>
            </div>
  );
}
