import Header from "./header/Header";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";

const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
      {/* <Header /> */}
      <NavBar />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </div>
  );
};


export default Layout;