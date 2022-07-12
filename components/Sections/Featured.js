import styled from "styled-components";
import Card from "./Card";

export default function Featured({ data }) {
  return (
    <Wrapper>
      <Heading>Featured Characters</Heading>
      <CardBox>
        {data.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </CardBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 4rem;
`;
const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;
const CardBox = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
