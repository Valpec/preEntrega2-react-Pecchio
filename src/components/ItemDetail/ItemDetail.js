import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
const ItemDetail =({ id, categoria, nombre, precio, imagen, stock } ) => {

    return (
        
         <div className="itemDetail">
              <img src={imagen} alt={nombre} className='imgItem'></img> 
              <div className="sideItemDetail">
                <h6>Producto:</h6>
                <h1 className="nombreItemDetail">{nombre}</h1>
                <h5 className="catItemDetail">{categoria}</h5>
                <h3 className="precioItemDetail"> ${precio}</h3>
                
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Cantidad agregada:`, quantity)} />
              </div>
        </div>

    )
}

export default ItemDetail