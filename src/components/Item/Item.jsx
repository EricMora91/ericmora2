import './Item.css'

const Item = ({producto}) => {
    const {id, imagen, nombre, precio} = producto
    return(
        <div className='item' id={`item${id}`}>
            <img className="imgItem" src={`${imagen}`} alt="productos" />
            <h2 className='itemName'>{nombre}</h2>
            <h4 className='itemPrice'>${precio}</h4>
            <button className='itemButton'>Agregar</button>
        </div>
    )
}

export default Item;