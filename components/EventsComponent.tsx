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
          <div> 
        <Link
          className=""
          href={"/events/" + slugevent}> 
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
        <h1
          className="lg:text-2xl font-bold   hover:underline"
          > {eventTitle} 
        </h1>
                </h1>
                <p className="mt-2 text-slate-300 capitalize dark:text-gray-300 group-hover:text-gray-300">{location}</p>

                <div className="flex mt-3 -mx-2">

                                   </div>
                                   <div className="pt-4 text-slate-100">
                                   Gewinner:<b> {gewinner} </b>
                                   </div>
            </div>
            </Link>
            </div>
  );
}
