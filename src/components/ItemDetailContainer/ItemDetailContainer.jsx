import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import productosJSON from '/src/productos.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";

const ItemDetailContainer = () =>{

    const {id} = useParams();
    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true)

    function asyncMock(id) {
        return new Promise ((resolve) =>{
            setTimeout(()=>{
                    const productoEncontrado = productosJSON.find(item =>  item.id === Number(id))
                    resolve(productoEncontrado)
            }, 2000)
        })
    }

    useEffect(()=>{
        setLoading(true)
        asyncMock(id)
        .then((res)=> {
            setProductos(res)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [id])

    return(
        <main className='main'>
        <section>
            {
                loading? <div className='spinner'><FadeLoader color={'#3C3C3C'}loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/></div>
                :<ItemDetail producto={productos}/>
            }
        </section>
    </main>
    )
}

export default ItemDetailContainer