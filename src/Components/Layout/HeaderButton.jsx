import "./HeaderButton.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";


const HeaderButton = (props) => {

    const [buttonHighlight, setButtonHighlight] = useState(false);

    const ctx = useContext(CartContext);

    const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `button ${buttonHighlight && "bump"}`;

    const {items} = ctx;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setButtonHighlight(true);

        setTimeout(() => {
            setButtonHighlight(false);
        }, 300);
        
    }, [items]);

    return <button className={btnClasses} onClick={props.onPress}>
        <span className="icon">
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className="badge">
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderButton;