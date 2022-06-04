import { initializeApollo, addApolloState } from "../libs/apolloClient";
import { CHARACTERS } from "../utils/apolloQueries";
import Featured from "../components/Sections/Featured";
import List from "../components/Sections/List";
import { useQuery } from "@apollo/client";

export default function Home({ data }) {
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
    <main className="spacer">
      <Featured data={data} />
      {!loading && clientData && (
        <List data={clientData.characters} fetchMore={fetchMore} />
      )}
    </main>
  );
}

export async function getServerSideProps() {
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
        data: data.characters.results.slice(0, 3),
      },
    });
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
