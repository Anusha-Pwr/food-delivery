import { Fragment } from "react"
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"
import { useState, useCallback, useEffect } from "react"

const Meals = (props) => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const fetchMealsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch("https://react-http-edb74-default-rtdb.firebaseio.com/meals.json");
    
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
    
          const data = await response.json();
          console.log(data);
    
    
          const DUMMY_MEALS = [];
    
          for (const key in data) {
            DUMMY_MEALS.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price
            });
          }
          setMeals(DUMMY_MEALS);
        } catch (error) {
          setError(error.message);
        }
    
        setIsLoading(false);
      }, []);
    
      let content = <p style={{textAlign: "center", color: "white"}}>Found no meals.</p>
    
      if(meals.length > 0) {
        content = <AvailableMeals mealsAvailable={meals} />
      }
    
      if(error) {
        content = <p style={{textAlign: "center", color: "white"}}>{error}</p>
      }
    
      if(isLoading) {
        content = <p style={{textAlign: "center", color: "white"}}>Loading...</p>
      }
    
      useEffect(() => {
        fetchMealsHandler();
      }, [fetchMealsHandler]);
    


    return <Fragment>
        <MealsSummary />
        {/* <AvailableMeals meals={props.mealsAvailable} /> */}
        {content}
    </Fragment>
}

export default Meals;