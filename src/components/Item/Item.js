import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ id, categoria, nombre, precio, imagen, stock }) => {

    return (
        <div className='itemCatalogo'>
             <img src={imagen} alt={nombre} className='imgItem'></img> 
            <div className="zonaTexto">
               <Link to={`/item/${id}`}> <h5 className="nombreItem ">{nombre}</h5> </Link>
                <h6 className="catItem">{categoria}</h6>
            </div>
                <h5 classnombre="precioItem">${precio} </h5>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Cantidad agregada:`, quantity)} />
        </div>

    )
}

export default Item