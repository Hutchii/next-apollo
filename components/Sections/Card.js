import styled from "styled-components";
import Link from "next/link";
import { dateConverter } from "../../utils/dateConverter";
import CreatedIcon from "../../public/svg/created.svg";
import SpecieIcon from "../../public/svg/specie.svg";

export default function Card({ data }) {
  return (
    <Link href="/">
      <Url>
        <CardBox>
            <Title>{data.name}</Title>
          <Box>
            <CreatedIcon />
            <p>{dateConverter(data.created)}</p>
          </Box>
          <Box>
            <SpecieIcon />
            <p>{data.species}</p>
          </Box>
          
        </CardBox>
      </Url>
    </Link>
  );
}

const CardBox = styled.div`
  width: 100%;
  /* background-color: var(--white); */
  padding: 1rem;
  border-radius: 0.5rem;
  div + div {
    margin-top: 0.5rem;
  }
`;
const Url = styled.a`
  width: 33.3333%;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  border-radius: 0.75rem;
  padding: 0.15rem;
  @media(max-width: 768px) {
    width: 100%;
  }
`;
const Box = styled.div`
  display: flex;
  font-size: 1.7rem;
  font-weight: 400;
  gap: 0.6rem;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.2rem;
`;
