import Link from "next/link";
import styled from "styled-components";

export default function FooterLink({ href, name, external }) {
  return (
    <li>
      {!external ? (
        <Link href={href} passHref>
          <LinkStyled>{name}</LinkStyled>
        </Link>
      ) : (
        <LinkStyled href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </LinkStyled>
      )}
    </li>
  );
}

const LinkStyled = styled.a`
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 400;
  color: #707070;
  @media (min-width: 480.1px) {
    &:hover {
      color: var(--green);
      border-bottom: 1px solid var(--green);
      border-spacing: 52px;
    }
  }
`;
