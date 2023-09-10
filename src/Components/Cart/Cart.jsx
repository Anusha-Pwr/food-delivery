import Modal from "./Modal";
import classes from "./Cart.module.css";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm/OrderForm";

function Cart(props) {
    const [checkOut, setCheckOut] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    function removeCartItemHandler(id) {
        cartCtx.removeItem(id);
    }

    function addCartItemHandler(item) {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    }

    function handleCheckOut() {
        setCheckOut(true);
    }

    // adding data to the backend
    async function addCustomerHandler(customerInfo) {
        setIsSubmitting(true);
        const response = await fetch("https://react-http-edb74-default-rtdb.firebaseio.com/Customers.json", {
            method: "POST",
            body: JSON.stringify({
                user: customerInfo,
                orderedMeals: cartCtx.items
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log(data);

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.resetCart();
    };

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((cartItem) => {
        return <CartItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
            onRemove={removeCartItemHandler.bind(null, cartItem.id)}
            onAdd={addCartItemHandler.bind(null, cartItem)}
        />;
    })}</ul>

    const actionButtons = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={handleCheckOut}>Order</button>}
    </div>

    const didSubmitData = <Fragment>
        <p>Order Submitted!</p>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Fragment>

    const CartData = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>


        {checkOut && <OrderForm onConfirm={addCustomerHandler} onCancel={props.onClose} />}

        {!checkOut && actionButtons}
    </Fragment>


    return (
        <Modal onHide={props.onClose}>

            {!isSubmitting && !didSubmit && CartData}
            {isSubmitting && <p>Submitting the order...</p>}
            {didSubmit && !isSubmitting && didSubmitData}
            {/* {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>


            {checkOut && <OrderForm onConfirm={addCustomerHandler} onCancel={props.onClose} />}

            {!checkOut && actionButtons} */}
        </Modal>
    );
}

export default Cart;
