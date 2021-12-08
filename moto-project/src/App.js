


import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';
import Header from './components/header/Header';
import Recommended from './components/recommended/Recommended';

function App() {


  return (
    <BrowserRouter>
<<<<<<< HEAD
        <div className="App">
            <Content/>
            <Advise/>
       </div>
=======
      <div className="App">
        <Header />
        <Content />
        <Recommended/>
        <Advise />
      </div>
>>>>>>> f6445658d12a2e494117ac8893bf951199dc9b1a

    </BrowserRouter>
  );
}
export default App;
