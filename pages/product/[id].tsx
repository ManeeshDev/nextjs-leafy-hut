import product from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";
import { NextPage } from "next";
import { Food, foodPrice } from "../../public/utils/types";

const Product: NextPage = () => {
    const [size, setSize] = useState<keyof foodPrice>("md");
    const food: Food = {
        image: "bbq-chicken-pizza.png",
        title: "BBQ Chicken Pizza",
        price: {sm: 600, md: 900, lg: 1900},
        description: "It turns out, the first ever BBQ chicken pizza creation belonged to California Pizza Kitchen's first menu. This outrageous, now famous creation was invented by the acclaimed pizza chef, Ed LaDou. LaDou was a famous chef who used to work for Wolfgang Puck at his Spago restaurant in Los Angeles."
    };
    const imgSrc = `/images/foods/${food.image}`;

    return (
        <div className={product.container}>
            <div className={product.left}>
                <div className={product.imgContainer}>
                    <Image src={imgSrc} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={product.right}>
                <h1 className={product.title}>{food.title}</h1>
                <span className={product.price}>Rs. {food.price[size]}</span>
                <br/><br/>
                <p className={product.desc}>{food.description}</p>
                <br/>
                <h3 className={product.choose}>Choose the size</h3>
                <div className={product.sizes}>
                    <div className={product.size} onClick={() => setSize("sm")}>
                        <Image src="/images/size.png" layout="fill" alt="" />
                        <span className={product.number}>Small</span>
                    </div>
                    <div className={product.size} onClick={() => setSize("md")}>
                        <Image src="/images/size.png" layout="fill" alt="" />
                        <span className={product.number}>Medium</span>
                    </div>
                    <div className={product.size} onClick={() => setSize("lg")}>
                        <Image src="/images/size.png" layout="fill" alt="" />
                        <span className={product.number}>Large</span>
                    </div>
                </div>
                <br/>
                <h3 className={product.choose}>Choose additional ingredients</h3>
                <div className={product.ingredients}>
                    <div className={product.option}>
                        <input type="checkbox" id="double" name="double" className={product.checkbox} />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={product.option}>
                        <input className={product.checkbox} type="checkbox" id="cheese" name="cheese" />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={product.option}>
                        <input className={product.checkbox} type="checkbox" id="spicy" name="spicy" />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={product.option}>
                        <input className={product.checkbox} type="checkbox" id="garlic" name="garlic" />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={product.add}>
                    <input type="number" defaultValue={1} className={product.quantity}/>
                    <button className={product.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
