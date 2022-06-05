import styled from "styled-components";
import { navigationList } from "../../utils/navigationList";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="spacer">
      <Line />
      <nav>
        <List>
          {navigationList.map((item) => (
            <FooterLink
              key={item.name}
              name={item.name}
              href={item.href}
              external={item.external}
            />
          ))}
        </List>
      </nav>
    </footer>
  );
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--black);
  opacity: 0.1;
  margin-top: 6rem;
`;
const List = styled.ul`
  display: flex;
  gap: 6rem;
  margin: 4rem 0;
`;
