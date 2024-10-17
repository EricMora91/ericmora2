import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
    const {id, imagen, nombre, precio} = producto
    return(
        <div className='item' id={`item${id}`}>
            <Link className='itemContainer' to={`/detail/${id}`}>
                <img className="imgItem" src={`/${imagen}`} alt="productos" />
                <h2 className='itemName'>{nombre}</h2>
                <h4 className='itemPrice'>${precio}</h4>
                <button className='itemButton'>Agregar</button>    
            </Link>
        </div>
    )
}

export default Item;