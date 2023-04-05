import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Adduser from './component/Adduser';
import Edituser from './component/Edituser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adduser />} />
      <Route path='/Edituser/:id' element={<Edituser />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
