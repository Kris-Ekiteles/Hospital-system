import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Registration from './Pages/Registration';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registration' element={< Registration />}/>
      </Routes>
    
    </div>
  );
}

export default App;
