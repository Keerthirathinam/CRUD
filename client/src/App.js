import './App.css';
import { CrudApp } from './first';
import { Addemployee } from './Addemployee';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CrudApp/>}/>
      <Route path="/addemployee" element={<Addemployee/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
