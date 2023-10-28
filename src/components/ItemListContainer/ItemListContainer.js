import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../itemsProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()


    useEffect(()=>{
        setLoading(true)
         const coleccionProductos = categoriaId 
            ? query(collection(db, 'items'), where('categoria', '==', categoriaId)) 
            :collection(db, 'items')
        
         getDocs(coleccionProductos)
        .then((response)=>{
            const list = response.docs.map((product)=>{
            return{
                id:product.id,
                ...product.data()
            }})
            setProducts(list)

        })
        .catch((error)=>console.log(error))
        .finally(()=>{setLoading(false)})
        
    } ,[categoriaId])


    return (
        <>  
        { loading ? <p>Cargando...</p> 
        : <div><h1 className="greeting">{greeting}</h1>
            <h1 className="greeting">{categoriaId}</h1>
            <ItemList products={products} />
            </div>}
        </>

    );
}

export default ItemListContainer;
