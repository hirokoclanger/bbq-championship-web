import Link from 'next/link';
import Image from 'next/image';

function toMonthName(monthNumber:number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    // 👇️ using visitor's default locale
    return date.toLocaleString([], {
      month: 'long',
    });
  }

export default function BlogCard({title, author, coverPhoto, short, datePublished, slug, category}){
    const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const d = datePublished.substring(5,7)

    return(
        <div className="flex item-center justify-center ">
            <div className="w-11/12 px-8 py-4 mt-8 bg-white rounded-lg shadow-md ">
                <div className="flex items-center justify-between min-w-9/12">
                    <span className="text-sm font-light text-gray-600 bg-white ">{datePublished}</span>
                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" >{category}</a>
                </div>
               
                <div className="mt-2 bg-white ">
                    <Link  className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"  href={'/posts/' + slug} >{title}</Link>
                    <div style={{ position: "relative", width: "100%", paddingBottom: "40%" }}><Image src={coverPhoto.url}  fill objectFit='cover'  alt="coverphoto"   /></div>
                    <p className="mt-2 text-gray-600 bg-white dark:text-gray-300 max-h-100 overflow-hidden">{short}</p>
                </div>
                <div className="flex items-center justify-between mt-4 bg-white">
                    <Link className="text-orange-400 hover:underline" href={'/posts/' + slug} >Read more</Link>
                    <div className="flex items-center bg-white">
                        <img src={author.avatar.url} alt="" className='h-9 border-white drop-shadow-md shadow-black rounded-3xl border-2'/>
                        <a className="font-bold text-gray-700 cursor-pointer px-2 dark:text-gray-200 bg-white"   role="link">{author.name}</a>
                    </div>
                </div>
            </div>
            <div className=' w-5/12 flex justify-center item-center '> 
                <div className='bg-gray-300 w-1  flex flex-col justify-center items-center'>
                    <p className="font-bold text-gray-700 ">
                        {datePublished.substring(0,4)}
                    </p>
                    <p className="font-bold text-gray-700 ">
                        {toMonthName(d)}
                    </p>
                </div>
            </div>
        </div>

    );

}

     
