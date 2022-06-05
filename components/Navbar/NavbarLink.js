import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavbarLink({
  href,
  name,
  active,
  delay,
  external,
  onClickHandler,
}) {
  const { pathname } = useRouter();
  const isPathActive = pathname === href;
  return (
    <Item active={active} delay={delay} onClick={onClickHandler}>
      {!external ? (
        <Link href={href} passHref>
          <LinkStyled isPathActive={isPathActive}>{name}</LinkStyled>
        </Link>
      ) : (
        <LinkStyled
          href={href}
          isPathActive={isPathActive}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </LinkStyled>
      )}
    </Item>
  );
}

const LinkStyled = styled.a`
  font-weight: ${({ isPathActive }) => (isPathActive ? "500" : "400")};
  color: ${({ isPathActive }) => (isPathActive ? "var(--green)" : "inherit")};
  cursor: pointer;
  @media (max-width: 768px) {
    font-weight: 500;
    padding-bottom: 1.5rem;
    width: auto;
    display: flex;
    font-weight: 500;
  }
`;

const Item = styled.li`
  @media (max-width: 768px) {
    opacity: ${({ active }) => (active ? "1" : "0")};
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(-16px)"};
    transition: opacity 0.3s ease, transform 0.35s ease;
    transition-delay: ${({ delay }) => `${delay}ms`};
    border-bottom: 1px solid rgba(0,0,0, 0.1);
  }
`;
