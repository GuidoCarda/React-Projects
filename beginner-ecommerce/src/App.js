import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  const addItem = ( count ) => {
    alert(`Added ${count} ${count > 1 ? 'items' : 'item'} to the cart`)
  }
  
  return (
    <>
      <NavBar/>
      <ItemListContainer onAdd={addItem}/>
      
    </>
  );
}

export default App;
