import Navbar from "../Navbar/Navbar";

export default function Layout({ children, onClickHandler, theme }) {
  return (
    <>
      <Navbar onClickHandler={onClickHandler} theme={theme} />
      {children}
    </>
  );
}
