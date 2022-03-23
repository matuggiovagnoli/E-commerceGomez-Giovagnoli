import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import SobreNosotros from './Components/SobreNosotros/SobreNosotros';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
      <Route path="/SobreNosotros" element={<SobreNosotros/>} />
      <Route path="/detalle/:ItemId" element={<ItemDetailContainer/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    
   
    </BrowserRouter>
  );
}

export default App;
