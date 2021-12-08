


import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';
import Header from './components/header/Header';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Header />
          <Content />
          <Advise />
        </div>
      </div>

    </BrowserRouter>
  );
}
export default App;
