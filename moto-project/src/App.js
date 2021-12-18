import "./App.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import Content from "./components/content/Content";
import Advise from "./components/content/advise/Advise";
import Header from "./components/header/Header";
import Recommended from "./components/recommended/Recommended";
import ContentCatalog from "./components/content-Catalog/ContentCatalog";
import ContentProduct from "./components/content-product/ContentProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Content />
          <ContentCatalog />
          <ContentProduct />
          <Recommended />
          <Advise />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
