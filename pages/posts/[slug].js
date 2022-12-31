import Headr from '../../components/Head.tsx'
import {GraphQLClient, gql} from 'graphql-request'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../components/NavBar';
import Image from 'next/image';
import Footer from '../../components/Footer';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc4i967301ju01ulcopm3cft/master");

const QUERY = gql`
  query Post($slug: String!){
      post(where: {slug: $slug}){
            id, 
            title,
            category,
            datePublished,
            author{
                name,
                avatar{
                    url
                    }
                },
            content{
                html
                },
            gallery{
              id,
              url
            },
            coverPhoto{
                id, 
                url
                }

          }
      } 
`;
const SLUGLIST = gql`
    {
        posts {
            slug
            }
        }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}
export default function BlogPost({post}){
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
            <h1 className='mx-auto hover:text-slate-400 text-3xl font-semibold'>{post.title}</h1> 
        <div class="mx-auto py-4">
         
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
             <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-300 text-lg">{post.author.name}</h2>
                <div class="w-12 h-1 bg-orange-400 rounded mt-2 mb-4"></div>
                
                <h1 class="font-medium title-font mt-4 text-gray-400 text-lg">{post.category}</h1>
                <p class="text-center text-sm">Erstellt: {post.datePublished}</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 pr-8 sm:py-8 sm:border-l border-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left text-center">
              <p class="leading-relaxed lg:text-xl text-lg  mb-4" dangerouslySetInnerHTML={{__html: post.content.html}}></p>
            </div>
          </div>
          <div className='pt-10 '>
          <Carousel className="border-solid border-black border-[8px]" useKeyboardArrows={true} swipeable={true} showArrows={true} dynamicHeight={true} showThumbs={false}>    
            {post.gallery.map((pic) =>(           
              <img key={pic.id} src={pic.url}  alt="coverphoto"   />
            ))}
          </Carousel>
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
