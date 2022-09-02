import foodList from "../styles/FoodList.module.scss";
import FoodCard from "./FoodCard";
import { NextPage } from "next";

const FoodList: NextPage = () => {
    const foodsList = [
        { image: "neapolitan-pizza.png", title: "Neapolitan Pizza", price: {sm: 560, md: 850, lg: 1800},
            description: "Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. Luckily for them, Neapolitan pizza was affordable and readily available through numerous street vendors."},
        { image: "cheese-pizza.png", title: "Cheese Pizza", price: {sm: 500, md: 800, lg: 1700},
            description: "Mozzarella is most commonly used on pizza, but you can definitely use other cheeses you like. Other cheeses that taste delicious on homemade pizza include parmesan (often used with mozzarella), fontina, cheddar, provolone, pecorino romano and ricotta, just to name a few." },
        { image: "bbq-chicken-pizza.png", title: "BBQ Chicken Pizza", price: {sm: 600, md: 900, lg: 1900},
            description: "It turns out, the first ever BBQ chicken pizza creation belonged to California Pizza Kitchen's first menu. This outrageous, now famous creation was invented by the acclaimed pizza chef, Ed LaDou. LaDou was a famous chef who used to work for Wolfgang Puck at his Spago restaurant in Los Angeles." },
        { image: "beef-pepperoni.png", title: "Beef Pepperoni Pizza", price: {sm: 740, md: 990, lg: 2100},
            description: "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices." },
        { image: "bbq-pulled-chicken-burger.png", title: "BBQ Pulled Chicken Burger", price: {sm: 850, md: 1490, lg: 2600},
            description: "The BBQ Pulled Chicken burger will be added to their Signature Collection burgers for a limited period, alongside the Buttermilk Crispy Chicken which is a permanent item. Pulled meats are supposed to be more tender than their shredded counterparts, as the protein is subjected to slow-cooking at low temperatures." },
        { image: "cheese-chicken-burger.png", title: "Cheese Chicken Burger", price: {sm: 980, md: 1800, lg: 3200},
            description: "THE CHICKSTER is committed to serving one of the best-fried chicken in the city. Providing exclusively different  flavours in Burgers, wraps, bowls and Fries. Considering the fact by keeping the chicken juicy, crispy and flavoursome in every bite." },
        { image: "crispy-chicken-burger.png", title: "Crispy Chicken Burger", price: {sm: 850, md: 1200, lg: 2900},
            description: "The Crispy Hainanese Chicken Burger is described as a “juicy, crispy chicken patty complemented by a trio of sauces that is unique to the Hainanese Chicken Rice – ginger sauce, garlic chili sauce and dark sweet sauce.” To enjoy the burger, one would drizzle the sauces over the slaw and patty sitting on a bed of lettuce just like you would with the beloved dish inspiration." },
        { image: "big-black-ham-beef-burger.png", title: "Big Black Ham & Beef Burger", price: {sm: 1100, md: 2490, lg: 3400},
            description: "Big black burger isolated on white background. Ham, beef cutlet, cheese, mayonnaise, vegetables and greens. Cooking, fast food. Unhealthy nutrition. Close up, copy space." },
        // { image: "cheese-pizza.png", title: "Cheese Pizza", price: 800, description: "" },
    ];
    return (
        <div className={foodList.container}>
            <br/>
            <h1 className={foodList.title}>THE BEST FOODS IN TOWN</h1> <br/>
            <p className={foodList.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <br/>
            <div className={foodList.wrapper}>
                {
                    foodsList.map((food, index) => {
                        return <>
                            <FoodCard
                                key={index}
                                image={food.image}
                                title={food.title}
                                price={food.price.md}
                                description={food.description.substring(0, 100) + '. . .'}
                            />
                        </>;
                    })
                }
            </div>
            <br/><br/>
        </div>
    );
};

export default FoodList;
