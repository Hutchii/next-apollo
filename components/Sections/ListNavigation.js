import styled from "styled-components";
import { useEffect } from "react";

export default function ListNavigation({ fetchMore, prev, next }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [prev, next]);

  return (
    <Navigation>
      <Button
        disabled={!prev}
        onClick={() => fetchMore({ variables: { page: prev } })}
      >
        &#8592; Prev
      </Button>
      <Button
        disabled={!next}
        onClick={() => fetchMore({ variables: { page: next } })}
      >
        Next &#8594;
      </Button>
    </Navigation>
  );
}

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
