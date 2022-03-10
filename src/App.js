import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={'Bienvenidos soy ItemListContainer'} />
    <ItemCount stock={8} initial={1}/>
    </>
  );
}

export default App;
