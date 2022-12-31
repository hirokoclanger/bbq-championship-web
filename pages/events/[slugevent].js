
import Headr from '../../components/Head.tsx'
import {GraphQLClient, gql} from 'graphql-request'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../components/NavBar';
import Image from 'next/image';
import Footer from '../../components/Footer';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master");

const QUERY = gql`
  query Post($slugevent: String!){
      eventsID(where: {slugevent: $slugevent}){
             id
    eventTitle
    gewinner
    location
    markdown
    preisgelder
    teilnehmer
    dateEvent
    eventDetails {
      html
    }
    pictures {
      fileName
      id
      url
    }
    eventcoverPhoto {
      fileName
      id
      url
    }          }
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
  const event = data.eventsID;
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
                <div className='bg-grill5 bg-cover w-5/12 '>
                </div>
 
    <div class="text-gray-300 bg-black/25 h-[85vh] overflow-y-scroll scrollbar-hide lg:px-8 px-4 body-font">
      <div class="container py-10 flex flex-col justify-between">
            <h1 className='mx-auto hover:text-slate-400 text-3xl font-semibold'>{event.eventTitle}</h1> 
        <div class="mx-auto py-4">
        </div>
        </div></div>
        </div>
        <Footer/>
    </main>
        </>
    )
    };
