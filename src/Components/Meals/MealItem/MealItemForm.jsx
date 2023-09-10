import { useRef, useState } from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";

function MealItemForm(props) {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    function handleSubmit(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; // refs always store values as strings.
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Enter a vaild amount(1-5).</p>}
        </form>
    );
}

export default MealItemForm;