


import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';
import Header from './components/header/Header';
import Recommended from './components/recommended/Recommended';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Recommended/>
        <Advise />
      </div>

    </BrowserRouter>
  );
}
export default App;
