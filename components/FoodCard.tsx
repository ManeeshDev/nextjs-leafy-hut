import Image from "next/image";
import foodCard from "../styles/FoodCard.module.scss";
import { NextPage } from "next";
import { FoodCardProps } from "../public/utils/types";

const FoodCard: NextPage<FoodCardProps> = (props: FoodCardProps) => {
    const imgSrc = `/images/foods/${props.image}`;
    return (
        <div className={foodCard.container}>
            <Image src={imgSrc} alt="" width="500" height="500" />
            <h1 className={foodCard.title}>{props.title}</h1>
            <span className={foodCard.price}>Rs. {props.price}</span>
            <p className={foodCard.desc}>
                {props.description}
            </p>
        </div>
    );
};

export default FoodCard;
