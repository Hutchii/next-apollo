import styled, { keyframes, css } from "styled-components";
import NavbarLink from "./NavbarLink";
import ClosedIcon from "../../public/svg/menu-closed.svg";
import OpenIcon from "../../public/svg/menu-open.svg";
import { useState, useEffect } from "react";
import { navigationList } from "../../utils/navigationList";

export default function Navbar({ onClickHandler, theme }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      if (openDropdown) document.body.classList.add("overflow-hidden");
      else document.body.classList.remove("overflow-hidden");
    }
  }, [openDropdown]);

  return (
    <header className="spacer">
      <NavStyled>
        <HamburgerStyled
          aria-label="Toggle menu"
          active={openDropdown}
          onClick={() => setOpenDropdown((prevValue) => !prevValue)}
        >
          <ClosedIcon />
          <OpenIcon />
        </HamburgerStyled>
        <ListStyled active={openDropdown}>
          {navigationList.map((item, i) => (
            <NavbarLink
              key={item.name}
              name={item.name}
              href={item.href}
              delay={i * 30 + 150}
              active={openDropdown}
              external={item.external}
              onClickHandler={() => setOpenDropdown(false)}
            />
          ))}
        </ListStyled>
        <ModeStyled aria-label="Toggle theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              cursor: "pointer",
              transform: theme ? "rotate(90deg)" : "rotate(40deg)",
              transition: "all 0.3s ease",
            }}
            onClick={onClickHandler}
          >
            <mask id="a">
              <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
              <circle
                style={{
                  cx: theme ? "100%" : "50%",
                  cy: theme ? "0%" : "23%",
                  r: theme ? "5px" : "9px",
                  transition: "all 0.3s ease",
                }}
                fill="#000000"
              />
            </mask>
            <circle
              cx="12"
              cy="12"
              fill={theme ? "#FFFFFF" : "#111111"}
              style={{
                r: theme ? "5px" : "9px",
                r: theme ? "5px" : "9px",
                transition: "all 0.3s ease",
              }}
              mask="url(#a)"
            />
            <g
              stroke="#FFFFFF"
              style={{
                opacity: theme ? "1" : "0",
                transition: "all 0.3s ease",
              }}
            >
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </g>
          </svg>
        </ModeStyled>
      </NavStyled>
    </header>
  );
}

const NavStyled = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  position: relative;
  li + li {
    margin-left: 4rem;
    @media (max-width: 768px) {
      margin: 2rem 0 0 0;
    }
  }
`;
const ListStyled = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    top: 9rem;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    transition: opacity 0.25s ease, background-color 0.08s ease;
    opacity: ${({ active }) => (active ? "1" : "0")};
    pointer-events: ${({ active }) => (active ? "unset" : "none")};
  }
`;

const HamburgerStyled = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 0;
    margin-left: -1rem;
    cursor: pointer;
    svg {
      transition: all 0.3s ease;
    }
    svg:first-of-type {
      opacity: ${({ active }) => (active ? "0" : "1")};
      transform: ${({ active }) => (active ? "scale(0)" : "scale(1)")};
    }
    svg:last-of-type {
      position: absolute;
      opacity: ${({ active }) => (active ? "1" : "0")};
      transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
    }
  }
`;
const ModeStyled = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;
