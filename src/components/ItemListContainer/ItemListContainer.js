import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../itemsProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductsByCategory : getProducts
        asyncFunc(categoriaId)
        .then(response => {setProducts(response)})
        .catch(error => console.log(error))}, [categoriaId] )


    return (
        <>  
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;
