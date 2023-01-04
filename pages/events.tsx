import Headr from '../components/Head';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import EventsComponent from '../components/EventsComponent';
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master"
);

const QUERY = gql`
  {
       eventsID {
        id
        slugevent
        eventTitle
        gewinner
        location
        facebooklink
        markdown
        preisgelder
        teilnehmer
        dateEvent
        eventDetails {
          html
          text
        }
        eventcoverPhoto{
            id
            url
            fileName
            }
        pictures {
          fileName
          id
          url
        }
      } 
  }
`;

export async function getStaticProps() {
  const { eventsID:any } = await graphcms.request(QUERY);
  return {
    props: {
      events:any,
    },
    revalidate: 10,
  };
}
export default function Events({events}) {
   
  return (
    <>
      <Headr/>
      <main className='px-16 h-[100vh]'  >

            <Navbar/>
            <div className='sm:flex flex-col-2 h-[85vh] sm:gap-10   px-0 bg-black/25'>
                <div className='bg-grill1 sm:flex hidden  bg-cover w-4/12 '>
                </div>
                <div className='overflow-y-scroll scrollbar-hide h-[85vh] sm:w-[100vw]'>
                    <div className='text-center  pt-8 px-8 text-4xl text-semibold text-slate-100'>
                       <h1> Grillmeisterschaften </h1>
                       <div className='bg-orange-400 w-auto h-[1.5px] mt-6 mx-auto'></div>
                    </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-8 ">
                {events.map((event:any) => (
                <EventsComponent key={event.id}
                    gewinner={event.gewinner}
                    facebooklink={event.facebooklink}
                    location={event.location}
                    markdown={event.markdown}
                    preisgelder={event.preisgelder}
                    teilnehmer={event.teilnehmer}
                    dateEvent={event.dateEvent}
                    eventDetails={event.eventDetails}
                    eventTitle={event.eventTitle}
                    eventcoverPhoto={event.eventcoverPhoto}
                    slugevent={event.slugevent}
                />
                ))}
                </div></div>
                </div>
            <Footer/>
        </main>
    </>
  );
}

