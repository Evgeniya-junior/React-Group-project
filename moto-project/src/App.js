
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <Content/>
        </div>
    </BrowserRouter> 
  );
}

export default App;
