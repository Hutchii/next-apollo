import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page, filter: { name: "rick" }) {
      info {
        count
        pages
        prev
        next
      }
      results {
        name
        id
        created
        species
        image
      }
    }
    location(id: 1) {
      id
    }
  }
`;
