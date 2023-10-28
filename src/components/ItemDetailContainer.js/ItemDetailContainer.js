import { useEffect, useState} from "react"
// import {getProductById} from "../../itemsProductos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { collection, getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const collectionProd = collection(db, 'items')
        const referenciaAlDoc = doc(collectionProd, itemId)
        getDoc(referenciaAlDoc)
        .then((response)=>{
            const productAdapted = { id: response.id, ...response.data()}
            setProducts(productAdapted)})
        .catch((error)=>console.log(error))
        .finally(() => {setLoading(false)})
    },[itemId])


    return(
        <div className="ItemDetailContainer">
           {loading ? <p>cargando...</p> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer;