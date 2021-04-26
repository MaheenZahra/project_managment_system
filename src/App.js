import {BrowserRouter} from 'react-router-dom';
import DisplayPage from './Components/User/DisplayPage';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <DisplayPage />
    </div></BrowserRouter>
  
  );
}

export default App;
