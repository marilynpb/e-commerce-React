import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getProductosById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BounceLoader } from "react-spinners";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();

    const navigate = useNavigate;

    console.log("Entre aca")
    useEffect(() => {
        getProductosById(productId)
            .then((data) => {
                if(!data) {
                    navigate('/*')
                }else{
                    setProducto(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[]);

    return(
        <div className="text-center mx-auto">
            {
                loading ?
                <BounceLoader color="rgba(239, 248, 246, 1)" className="mx-auto py-5 my-5"/>
                :
                <ItemDetail {...producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer