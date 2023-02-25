import Link from "next/link"; 
import Image from "next/image";
export default function SponsorsCard( {sponsorTitle, sponsorLink,sponsorShortDescription, sponsorImage}){
    return(    
          <div className=" justify-between  flex gap-4 px-8 flex-col bg-black/25 py-8 ">
        <p className="lg:text-5xl text-3xl text-slate-100 font-bold text-center"> {sponsorTitle} </p>
              <div  
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "50%",
            }}>
              <Image src={sponsorImage.url} fill alt={"logo"} objectFit="cover"  />
 </div>
 <p className="text-gray-300 px-1 overflow-auto ">{sponsorShortDescription}</p>
    <Link
      href={sponsorLink}
      target="_blank"
      className="mt-2 bg-gray-300 transition-colors duration-300 transform lg:mt-0 w-auto hover:text-white py-2 px-5  text-center  hover:bg-orange-400">
    {sponsorTitle} 
    </Link>
          </div>
    )
}
