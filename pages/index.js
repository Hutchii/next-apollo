import { initializeApollo, addApolloState } from "../libs/apolloClient";
import { CHARACTERS } from "../utils/apolloQueries";
import Featured from "../components/Sections/Featured";
import List from "../components/Sections/List";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import Description from "../components/Sections/Description";

export default function Home({ heroData }) {
  const {
    loading,
    error,
    data: clientData,
    fetchMore,
  } = useQuery(CHARACTERS, {
    variables: {
      page: 1,
    },
  });

  return (
    <>
      <Head>
        <title>Next Blog with Apollo</title>
        <meta
          content="Next Blog with Apollo using SSR and Client Side."
          name="description"
        />
        <link rel="canonical" href="https://nextjs-blog-apollo.vercel.app" />
      </Head>
      <main className="spacer">
        <Description />
        {heroData && heroData.length > 0 && <Featured data={heroData} />}
        {!loading && clientData && !error && (
          <List data={clientData.characters} fetchMore={fetchMore} />
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = initializeApollo();
  try {
    const { data } = await client.query({
      query: CHARACTERS,
      variables: {
        page: 1,
      },
    });
    return addApolloState(client, {
      props: {
        heroData: data.characters.results.slice(0, 3),
      },
    });
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
