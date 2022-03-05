import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={'Bienvenidos soy ItemListContainer'} />
    </>
  );
}

export default App;
