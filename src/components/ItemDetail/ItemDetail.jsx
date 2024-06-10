import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import './ItemDetail.css'

const ItemDetail = ({nombre, img, descripcion, medidas, stock}) => {
    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)
    }

    return(
        <div className="mx-auto py-5 detalles w-75">
            <p className="text-center fs-5">{nombre}</p>
            <img className="img-fluid img-producto" src={img}/>
            <p className="mt-3"><b>Disponibles: {stock}</b></p>
            <p>{descripcion}</p>
            <p><b>Medidas: </b>{medidas}</p>
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
            <ToastContainer/>
        </div>
    )   
}

export default ItemDetail;