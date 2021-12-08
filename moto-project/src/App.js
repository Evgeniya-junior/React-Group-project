


import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';
import Advise from './components/content/advise/Advise';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Advise />
      </div>

    </BrowserRouter>
  );
}
export default App;
