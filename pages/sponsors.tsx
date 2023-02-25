
import Headr from "../components/Head";
import { GraphQLClient, gql } from "graphql-request";
import Navbar from "../components/NavBar";
import SponsorsCard from "../components/SponsorsCard";
import Footer from "../components/Footer";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master"
);

const QUERY = gql`
  {
     sponsors {
    id
    sponsorLink
    sponsorShortDescription
    sponsorTitle
    sponsorImage {
      fileName
      id
      url
    }
  }  }
`;

export async function getStaticProps() {
  const { sponsors:any } = await graphcms.request(QUERY);
  return {
    props: {
      sponsors:any,
    },
    revalidate: 10,
  };
}

export default function Home({ sponsors }) {
  return (
    <>
      <Headr />
      <main className="px-16  h-[100vh]">
        <Navbar />
        <section className="flex lg:flex-nowrap lg:h-[85vh]  flex-wrap bg-black/25">
          <div className="bg-grill4 sm:flex hidden bg-cover bg-repeat-x  lg:w-4/12 w-full "></div>
          <div className="lg:flex  sm:overflow-y-scroll scrollbar-hide   justify-between w-11/12">
            <div className="py-8 grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
              {sponsors.map((spon:any) => (
                <SponsorsCard
                  sponsorLink={spon.sponsorLink}
                  sponsorTitle={spon.sponsorTitle}
                  sponsorImage={spon.sponsorImage}
                  key={spon.id}
                  sponsorShortDescription={spon.sponsorShortDescription}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
