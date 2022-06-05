import styled from "styled-components";

export default function Description() {
  return (
    <>
      <Heading>Rick and Morty</Heading>
      <Text>
        The series follows the misadventures of cynical mad scientist Rick
        Sanchez and his good-hearted, but fretful grandson Morty Smith, who
        split their time between domestic life and interdimensional adventures.
      </Text>
    </>
  );
}

const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin: 1rem 0 1rem 0;
  }
`;
const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: var(--grey);
`;
