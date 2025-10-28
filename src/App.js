import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Ambulance from './Pages/Ambulance';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registration' element={< Registration />}/>
        <Route path ='/Ambulance' element = {<Ambulance />} />
      </Routes>
    
    </div>
  );
}

export default App;
