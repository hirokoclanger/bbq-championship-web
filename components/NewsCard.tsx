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

export default function NewsCard({
  title,
  author,
  coverPhoto,
  short,
  content,
  datePublished,
  slug,
  category,
}) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = datePublished.substring(5, 7);

  return (
    <div className="flex  item-center justify-between  px-8 gap-0">
      <div className="lg:w-10/12 w-full px-8 py-4 mt-8 shadow-sm bg-gray-black/25 hover:bg-black/75 duration-300 ">
        <div className="flex items-center justify-between min-w-9/12">
          <span className="text-sm  text-gray-500">{datePublished}</span>
          <p className="px-3 text-sm font-bold text-gray-800 transition-colors duration-300 transform bg-gray-400  cursor-pointer hover:bg-gray-500">
            {category}
          </p>
        </div>
        <Link
          className="lg:text-2xl font-bold text-gray-200 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          href={"/posts/" + slug}
        >
          {title}
        </Link>
        <div className="mt-2 flex gap-8">
          <div
            className="mt-4 lg:flex hidden"
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "10%",
            }}
          >
            <Image
              src={coverPhoto.url}
              fill
              objectFit="cover"
              alt="coverphoto"
            />
          </div>
          <p className="mt-2 pt-4 flex flex-col gap-10 lg:w-7/12 text-gray-300  dark:text-gray-300 max-h-100 ">
            <p className="lg:line-clamp-4 line-clamp-3  " dangerouslySetInnerHTML={{__html: content.text}} >
            </p>
            <div className="flex w-full  lg:justify-between items-center">
              {" "}
              <Link
                className="text-orange-400 hover:underline  text-sm"
                href={"/posts/" + slug}
              >
                Mehr
              </Link>
              <div className="flex items-center lg:justify-end pl-4">
                <img
                  src={author.avatar.url}
                  alt=""
                 
                  className="lg:h-5 h-4 border-slate-300 drop-shadow-md shadow-black rounded-3xl border-2"
                />
                <p className="lg:font-bold text-sm text-gray-300 cursor-pointer px-2 dark:text-gray-300">
                  {author.name}
                </p>
              </div>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 "></div>
      </div>
      <div className="lg:w-2/12 lg:flex hidden justify-center items-center">
        <div className="h-full flex  items-center">
          <div className=" border-white/30 border-dashed border-[1px] w-[1px] h-full "></div>
          <div className=" font-bold text-xl min-w-[100px] transfrom rotate-90 text-orange-400  ">
            {toMonthName(datePublished.substring(5, 7))}
          </div>
        </div>
        <div className=" min-w-1/12  flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
}
