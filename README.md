## Next.js blog with [Apollo](https://www.apollographql.com/) using [The Rick and Morty API](https://rickandmortyapi.com/)

Uses getStaticProps to get first page of results and passes it as prop using ApolloProvider, further queries are client-side. "Featured Characters" section contains characters that are in "All Characters" section. Beacuse of that I pass first three results from getStaticProps as props to index page, otherwise changing the page would affect featured characters.

### .env.local:
- NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/graphql
