

import Headr from "../components/Head";
import { GraphQLClient, gql } from "graphql-request";
import Navbar from "../components/NavBar";
import InformationCard from "../components/InformationCard";
import Footer from "../components/Footer";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master"
);

const QUERY = gql`
  {
    informations {
      id
      content {
        html,
        text
      }
    }
  }
`;

export async function getStaticProps() {
  const { informations:any } = await graphcms.request(QUERY);
  return {
    props: {
      informations:any,
    },
    revalidate: 10,
  };
}

export default function Home({ informations }) {
  return (
    <>
      <Headr />
      <main className="px-16  h-[100vh]">
        <Navbar />
        <section className="flex lg:flex-nowrap lg:h-[85vh]  flex-wrap bg-black/25">
          <div className="bg-grill4 sm:flex hidden bg-cover bg-repeat-x  lg:w-4/12 w-full "></div>
          <div className="lg:flex sm:overflow-y-scroll scrollbar-hide justify-between w-11/12 ">
            <div className="py-4">
              {informations.map((information:any) => (
                <InformationCard
                  key={information.id}
                  content={information.content}
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
