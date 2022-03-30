import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Detail from './pages/detail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
