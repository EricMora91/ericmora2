import ItemList from '../ItemList/ItemList'
import productos from '/src/productos.json'
import './ItemListContainer.css'

console.log(productos)

const ItemListContainer = ({greeting}) =>{
    return(
        <main className='main'>
            <h1>{greeting}</h1>
            <ItemList productos = {productos}/>
        </main>
    )
}

export default ItemListContainer