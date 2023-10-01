import { useEffect, useState} from "react"
import {getProductById} from "../../itemsProductos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {console.log(error)})

    }, [itemId])


    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;