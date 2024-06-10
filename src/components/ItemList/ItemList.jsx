import Item from "../Item/Item";

const ItemList = ({products}) => {
    return(
        <div className="container text-center mx-auto">
            <div className="row mx-auto">
            {
                products.map((prod) => (
                <div key={prod.id} className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                    <Item {...prod}/>
                </div>
                ))
            }
            </div>

        </div>
    )
};

export default ItemList;
