import ItemList from '../ItemList/ItemList'
import productosJSON from '/src/productos.json'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { useEffect, useState} from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const ItemListContainer = () =>{

    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    function asyncMock(categoryId) {
        return new Promise ((resolve) =>{
            setTimeout(()=>{
                if(categoryId == undefined){
                    resolve(productosJSON)
                } else {
                    const productosFiltrados = productosJSON.filter((item) => {
                        return item.categoría === categoryId
                    })
                    resolve(productosFiltrados)
                }
            }, 2000)
        })
    }

    useEffect(()=>{
        setLoading(true)
        asyncMock(categoryId)
        .then((res)=> {
            setProductos(res)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

    return(
        <main className='main'>
            <section className='itemListContainer'>
                {
                    loading? <div className='spinner'><FadeLoader color={'#3C3C3C'}loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/></div>
                    :<ItemList productos={productos}/>
                }
            </section>
        </main>
    )
}

export default ItemListContainer