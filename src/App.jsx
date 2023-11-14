import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemList/ItemListContainer';
function App() {


  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos!!!" />
    </div>
  )
}

export default App