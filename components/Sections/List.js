import styled from "styled-components";
import { dateConverter } from "../../utils/dateConverter";
import ListNavigation from "./ListNavigation";

export default function List({ data, fetchMore }) {
  const { info, results } = data;
  return (
    <Wrapper>
      <Heading>All Characters</Heading>
      {results?.map((character) => (
        <div key={character.id}>
          <Character>
            <Title>{character.name}</Title>
            <Date>{dateConverter(character.created)}</Date>
          </Character>
          <Line />
        </div>
      ))}
      <ListNavigation fetchMore={fetchMore} prev={info.prev} next={info.next} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 4rem;
  div + div {
    margin-top: 1.5rem;
  }
`;
const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;
const Character = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--black);
  opacity: 0.1;
`;
