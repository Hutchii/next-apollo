import styled from "styled-components";
import { dateConverter } from "../../utils/dateConverter";

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
      <Navigation>
        <Button
          disabled={!info.prev}
          onClick={() => fetchMore({ variables: { page: info.prev } })}
        >
          &#8592; Prev
        </Button>
        <Button
          disabled={!info.next}
          onClick={() => fetchMore({ variables: { page: info.next } })}
        >
          Next &#8594;
        </Button>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5rem;
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
const Button = styled.button`
  border: 0;
  background: transparent;
  font-size: 1.7rem;
  margin-top: 2rem;
  cursor: pointer;
  color: var(--black);
  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;
