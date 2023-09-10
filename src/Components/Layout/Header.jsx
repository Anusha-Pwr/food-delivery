import { Fragment } from "react"
import "./Header.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
    return <Fragment>
        <header className="header">
            <h1>ReactMeals</h1>
            <HeaderButton onPress={props.onOpen}>Cart</HeaderButton>
        </header>
        <div className="main-image">
            <img src="https://images.pexels.com/photos/5718029/pexels-photo-5718029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="A table full of delicious food!" />
        </div>
    </Fragment>
}

export default Header;