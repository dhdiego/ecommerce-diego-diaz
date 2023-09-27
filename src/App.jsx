import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Tienda De Rock" />
      
   </div>

  );
}

export default App;