import "./App.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import Content from "./components/content/Content";

import Header from "./components/header/Header";
import ContentCatalog from "./components/content-Catalog/ContentCatalog";
import ContentProduct from "./components/content-product/ContentProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <div className="container">
          <Header />
          <Content />
          <ContentCatalog />
          <ContentProduct />
          <Footer/>
        </div>
=======
        <Header />
        <Content />
        <ContentCatalog />
        <ContentProduct />
        <Footer/>
>>>>>>> 5e5a3b13181b9e3c3a082cf2d7c336e86a13f403
      </div>
    </BrowserRouter>
  );
}

export default App;
