import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola, bienvenidos a The Victorian Way"/>
    </>
  )
}

export default App
