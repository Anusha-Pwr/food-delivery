import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvailableMeals = (props) => {
    // const [error, setError] = useState(null);
    // const DUMMY_MEALS = [];

    // const fetchMealsHandler = async () => {
    //     setError(null);
    //     try {
    //         const response = await fetch("https://react-http-edb74-default-rtdb.firebaseio.com/meals.json");

    //         if(!response.ok) {
    //             throw new Error("Something went wrong!");
    //         }

    //         const data = await response.json();
    //         console.log(data);


    //         for (const key in data) {
    //             DUMMY_MEALS.push({
    //                 id: key,
    //                 name: data[key].name,
    //                 description: data[key].description,
    //                 price: data[key].price
    //             });
    //         }
    //         console.log(DUMMY_MEALS);
    //     } catch(error) {
    //         setError(error.message);
    //     }
    // }


    // useEffect(() => {
    //     fetchMealsHandler();
    // }, [fetchMealsHandler]);


    return (
        <section className="meals">
            <Card>
                <ul>
                    {console.log("hello")}
                    {props.mealsAvailable.map(mealItem => {
                        console.log(mealItem.name);
                        return <MealItem key={mealItem.id} id={mealItem.id} name={mealItem.name} description={mealItem.description} price={mealItem.price} />
                    })}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;