
import classes from "./OrderForm.module.css";
import useInput from "../../../hooks/use-input";

const OrderForm = (props) => {

    const {
        value: name,
        isValid: nameIsValid,
        error: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset
    } = useInput(val => val.trim()!=="");

    // const [name, setName] = useState("");
    // const [nameIsTouched, setNameIsTouched] = useState(false);

    // const nameIsValid = name.trim() !== "";
    // const nameIsInvalid = !nameIsValid && nameIsTouched;

    // function nameChangeHandler(event) {
    //     setName(event.target.value);
    // }

    // function nameBlurHandler(event) {
    //     setNameIsTouched(true);
    // }

    const {
        value: street,
        isValid: streetIsValid,
        error: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: streetReset
    } = useInput(val => val.trim()!=="");

    const {
        value: code,
        isValid: codeIsValid,
        error: codeHasError,
        valueChangeHandler: codeChangeHandler,
        inputBlurHandler: codeBlurHandler,
        reset: codeReset
    } = useInput(val => val.trim().length === 5);

    const {
        value: city,
        isValid: cityIsValid,
        error: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: cityReset
    } = useInput(val => val.trim()!=="");

   

    // const [street, setStreet] = useState("");
    // const [streetIsTouched, setStreetIsTouched] = useState(false);

    // const streetIsValid = street.trim() !== "";
    // const streetIsInvalid = !streetIsValid && streetIsTouched;

    // function streetChangeHandler(event) {
    //     setStreet(event.target.value);
    // }

    // function streetBlurHandler(event) {
    //     setStreetIsTouched(true);
    // }

    let formIsValid = false;

    if(nameIsValid && streetIsValid && codeIsValid && cityIsValid) {
        formIsValid = true;
    }


    // const [code, setCode] = useState("");
    // const [city, setCity] = useState("");


   

    

    // function codeChangeHandler(event) {
    //     setCode(event.target.value);
    // }

    // function cityChangeHandler(event) {
    //     setCity(event.target.value);
    // }

    


    const handleOrderForm = (event) => {
        event.preventDefault();

      
        if(!formIsValid) {
            return;
        }
        console.log(name);
        nameReset();
        streetReset();
        codeReset();
        cityReset();

        // Submitting the data to the firebase backend
        props.onConfirm({
            name,
            street,
            code,
            city
        });

        // setName("");
        // setNameIsTouched(false);
        
        // setStreet("");
        // setStreetIsTouched(false);        
    }

    return (
        
            <form className={classes.form} onSubmit={handleOrderForm}>
                <div className={`${classes.control} ${nameHasError && classes.invalid}`}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
                    {nameHasError && <p className={classes.errorText}>Enter a valid name.</p>}
                </div>

                 <div className={`${classes.control} ${streetHasError && classes.invalid}`}>
                    <label htmlFor="address">Street</label>
                    <input id="address" type="text" value={street} onChange={streetChangeHandler} onBlur={streetBlurHandler} />
                    {streetHasError && <p className={classes.errorText}>Enter a valid street.</p>}
                </div>

                <div className={`${classes.control} ${codeHasError && classes.invalid}`}>
                    <label htmlFor="postal-code">Postal Code</label>
                    <input id="postal-code" type="text" value={code} onChange={codeChangeHandler} onBlur={codeBlurHandler} />
                    {codeHasError && <p className={classes.errorText}>Enter a valid code.</p>}
                </div>

                <div className={`${classes.control} ${cityHasError && classes.invalid}`}>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={cityChangeHandler} onBlur={cityBlurHandler} />
                    {cityHasError && <p className={classes.errorText}>Enter a valid city.</p>}
                </div>

                <div className={classes.actions}>
                    <button disabled={!formIsValid}>Check-Out</button>
                    <button onClick={props.onCancel}>Cancel</button>
                </div>
            </form>
        
    );
}

export default OrderForm;