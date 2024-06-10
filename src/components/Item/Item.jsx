import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({nombre, precio, img, descripcion, id}) => {
    return(
        <div className="card-product bg-light col-3 w-100 my-3 pb-2">
            <img className="img-fluid p-1" src={img}/>
            <h1 className='m-2 precio'>$ {precio}</h1>
            <h1 className='m-1'>{nombre}</h1>
            <p className='pb-2'>{descripcion}</p>
            <hr></hr>
            <button><Link to={`/producto/${id}`}>Más detalles</Link></button>
        </div>
    )
}

export default Item;