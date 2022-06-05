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
  color: var(--grey);
  transition: color 0.3s ease;
  &:hover {
    color: var(--black);
  }
`;
