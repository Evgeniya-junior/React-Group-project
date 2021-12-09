import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';
import ContentCatalog from './components/content-Catalog/ContentCatalog';

function App() {
 

  return (
    <BrowserRouter>
        <div className="App">
            <Content/> 
            <ContentCatalog/>
            <Advise/>
        </div>
        
    </BrowserRouter> 
  );
}
export default App;
