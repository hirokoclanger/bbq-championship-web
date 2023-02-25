import Headr from "../components/Head";
import { GraphQLClient, gql } from "graphql-request";
import Navbar from "../components/NavBar";
import ImpressumCard from "../components/ImpressumCard";
import Footer from "../components/Footer";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master"
);

const QUERY = gql`
  {
    impressums {
      id,
      content {
        html,
        text
      }
    }
  }
`;

export async function getStaticProps() {
  const { impressums:any } = await graphcms.request(QUERY);
  return {
    props: {
      impressums:any,
    },
    revalidate: 10,
  };
}

export default function Home({ impressums }) {
  return (
    <>
      <Headr />
      <main className="px-16  h-[100vh]">
        <Navbar />
        <section className="flex lg:flex-nowrap lg:h-[85vh]  flex-wrap bg-black/25">
          <div className="bg-grill4 sm:flex hidden bg-cover bg-repeat-x  lg:w-4/12 w-full "></div>
          <div className="lg:flex sm:overflow-y-scroll scrollbar-hide w-11/12 justify-between ">
            <div className="py-4">
              {impressums.map((imp:any) => (
                <ImpressumCard
                  key={imp.id}
                  content={imp.content}
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
