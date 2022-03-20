import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
   
    </>
  );
}

export default App;
