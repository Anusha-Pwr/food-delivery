import MealItemForm from "./MealItemForm";
import "./MealItem.css";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

function MealItem(props) {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    function addToCartHandler(amount) {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        });
    }

    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;