import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, categoria, nombre, precio, imagen, stock }) => {
        
    return (
        <div className='itemCatalogo'>
             <img src={imagen} alt={nombre} className='imgItem'></img> 
            <div className="zonaTexto">
              <h5 className="nombreItem ">{nombre}</h5>
                <h6 className="catItem">{categoria}</h6>
            </div>
            <div className='footerItem'>
                <h5 className="precioItem">${precio} </h5>
                <Link to={`/item/${id}`}><button className='botonCompra'> Ver más</button></Link>
           </div>
        </div>

    )
}

export default Item