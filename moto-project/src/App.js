


import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';
import Header from './components/header/Header';
<<<<<<< HEAD
=======
import Recommended from './components/recommended/Recommended';
>>>>>>> a425c30bd47c50ab1bfdf284a82e25d0acba3206

function App() {


  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <div className='container'>
          <Header />
          <Content />
          <Advise />
        </div>
=======
        <Header />
        <Content />
        <Recommended/>
        <Advise />
>>>>>>> a425c30bd47c50ab1bfdf284a82e25d0acba3206
      </div>

    </BrowserRouter>
  );
}
export default App;
