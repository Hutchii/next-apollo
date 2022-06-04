import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavbarLink({ href, name, active, delay }) {
  const { pathname } = useRouter();
  const isPathActive = pathname === href;
  return (
    <Item active={active} delay={delay}>
      <Link href={href}>
        <LinkStyled isPathActive={isPathActive}>{name}</LinkStyled>
      </Link>
      <Line />
    </Item>
  );
}

const LinkStyled = styled.a`
  font-weight: ${({ isPathActive }) => (isPathActive ? "500" : "400")};
  color: ${({ isPathActive }) => (isPathActive ? "var(--green)" : "inherit")};
  cursor: pointer;
  @media (max-width: 768px) {
    font-weight: 500;
  }
`;
const Line = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    background: var(--black);
    opacity: 0.1;
    margin-top: 1.5rem;
  }
`;
const Item = styled.li`
  @media (max-width: 768px) {
    opacity: ${({ active }) => (active ? "1" : "0")};
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(-16px)"};
    transition: opacity 0.3s ease, transform 0.35s ease;
    transition-delay: ${({ delay }) => `${delay}ms`};
  }
`;
