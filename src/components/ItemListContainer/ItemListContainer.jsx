import { useEffect, useState } from "react";
import { getProductos, getProductosByCategoria } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(()=> {
        setLoading(true)
        const dataProductos = categoryId ? getProductosByCategoria(categoryId) : getProductos();
        
        dataProductos
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[categoryId]);

    return(
        <div className="my-4 row mx-auto">
            <p className="title mx-3">{title}</p>
            {
                loading ?
                <BounceLoader color="rgba(239, 248, 246, 1)" className="mx-auto py-5 my-5"/>
                :
                <ItemList products={products}/>
            }
        </div>
    )
}

export default ItemListContainer;