import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children, onClickHandler, theme }) {
  return (
    <>
      <Navbar onClickHandler={onClickHandler} theme={theme} />
      {children}
      <Footer />
    </>
  );
}
