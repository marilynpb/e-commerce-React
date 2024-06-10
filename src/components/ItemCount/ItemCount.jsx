import { useState } from "react";

const ItemCount = ({stock, valorInicial, onAdd}) =>{
    const [count, setCount] = useState(valorInicial);

    const incrementar = () =>{
       count < stock && setCount(count + 1);
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1);
    }

    return(
        <div>
            <button onClick={decrementar}>-</button>
            {count}
            <button onClick={incrementar}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;