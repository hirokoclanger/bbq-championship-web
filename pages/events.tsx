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
      eventsID:any,
    },
    revalidate: 10,
  };
}
export default function Events({eventsID}) {
   
  return (
    <>
      <Headr/>
      <main className='px-16 h-[100vh]'  >

            <Navbar/>
            <div className='sm:flex flex-col-2 h-[85vh] sm:gap-10   px-0 bg-black/25'>
                <div className='bg-grill3 bg-cover w-5/12 '>
                </div>
                <div className='overflow-y-scroll scrollbar-hide h-[85vh] sm:w-[100vw]'>
                <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8  p-8 ">
                {eventsID.map((event:any) => (
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

