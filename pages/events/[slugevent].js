
import Headr from '../../components/Head.tsx'
import {GraphQLClient, gql} from 'graphql-request'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../components/NavBar';
import Image from 'next/image';
import Footer from '../../components/Footer';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master");

const QUERY = gql`
  query Event($slugevent: String!){
      events(where: {slugevent: $slugevent}){
    id,
    eventTitle,
    gewinner,
    location,
    markdown,
    preisgelder,
    teilnehmer,
    ergebnisliste{
        text,
        html
    },
    dateEvent,
    eventDetails {
      html
      text
    },
    pictures {
      fileName
      id
      url
    },
    eventcoverPhoto {
      fileName
      id
      url
    }        
      }
      } 
`;
const SLUGLIST = gql`
    {
        eventsID {
            slugevent
            }
        }
`;

export async function getStaticPaths() {
  const { eventsID } = await graphcms.request(SLUGLIST);
  return {
    paths: eventsID.map((event) => ({ params: { slugevent: event.slugevent } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugevent = params.slugevent;
  const data = await graphcms.request(QUERY, { slugevent });
  const event = data.events;
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}
export default function BlogPost({event}){
    return(
        <>
      <Headr/>
    <main className="px-16 h-[100vh]">
        
    <Navbar/>   
        <div className='sm:flex flex-col-2 h-[85vh] sm:pl-0  bg-black/25'>
                <div className='bg-grill5 bg-cover w-4/12 '></div>
 
                <div className="text-gray-300 bg-black/25 h-[85vh] w-full overflow-y-scroll scrollbar-hide lg:px-8 px-4 body-font">
                    
 <div className="container 5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-orange-400 tracking-widest font-medium title-font mb-1">{event.dateEvent}</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">{event.eventTitle}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{event.eventDetails.text}</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-yellow-300 font-medium title-font mb-2">1. Platz</h2>
        <h2 className="text-md sm:text-md text-slate-100 font-medium title-font mb-2">{event.gewinner}</h2>
        <p className="leading-relaxed text-base mb-4">{event.gewinner} flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-slate-200 font-medium title-font mb-2">2. Platz</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-amber-600 font-medium title-font mb-2">3. Platz</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
       <div className="mt-8  mx-auto">
    <div className="grid-cols-3 p-10 space-y-2 bg-black/25 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3  " >

            <p className=" " dangerouslySetInnerHTML={{__html: event.ergebnisliste.html}} >
            </p>
        </div>
  </div>
       <div className="mt-8  mx-auto">
    <div className="grid-cols-3 p-10 space-y-2 bg-black/25 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 ">
        {event.pictures.map((pic) => (
        <div className="w-full rounded">
            <img src={pic.url}
                alt="image"/>
                </div>
        ))}
            </div>
  </div>

</div>

        </div>
        </div>
        <Footer/>
    </main>
        </>
    )
    };
