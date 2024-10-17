import './ItemDetail.css'
import { Link, useParams } from 'react-router-dom'

const ItemDetail = ({producto}) =>{

    const {imagen, nombre, descripción, precio, stock} = producto
    const {id} = useParams();

    return(
        <section className="itemDetail" id={`item${id}`}>
            <div className='itemDetailContainer'>
                <img className= "imgDetail" src={`/${imagen}`} alt="productos" />
                <h2 className='detailName'>{nombre}</h2>
                <p className='description'>{descripción}</p>
                <h2 className='price'>${precio}</h2>
                <h6 className='stock'>En Stock: {stock}</h6>
                <button className='agregar'>Agregar</button>
                <Link className='x' to="/">X</Link>
            </div>
        </section>
        )
}

export default ItemDetail