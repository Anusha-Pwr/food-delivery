import React from "react";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
  const [isClicked, setIsClicked] = useState(false);


  
  function handleClick() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  


  return (
    <CartProvider>
    {isClicked && <Cart onClose={handleClose} />}
      <Header onOpen={handleClick} />
      <Meals />
    </CartProvider>
  );
}

export default App;
