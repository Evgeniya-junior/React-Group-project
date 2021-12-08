

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';


function App() {



  return (
    <BrowserRouter>
      <div className="App">

        <div div className="container">
          <Header />
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
