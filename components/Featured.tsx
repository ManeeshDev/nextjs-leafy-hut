import featured from "../styles/Featured.module.scss";
import Image from "next/image";
import { useState } from "react";
import { NextPage } from "next";

const Featured: NextPage = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/images/featured.png",
        "/images/featured1.png",
        "/images/featured2.png",
    ];

    const handleArrow = (direction: string) => {
        if (direction === "left") {
            setIndex(index !== 0 ? index-1 : (images.length - 1));
        }
        if (direction === "right") {
            setIndex(index !== (images.length - 1) ? index+1 : 0);
        }
    }

    return (
        <div className={featured.container}>
            <div className={featured.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("left")}>
                <Image src="/images/arrow-left.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={featured.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={featured.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={featured.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("right")}>
                <Image src="/images/arrow-right.png" layout="fill" alt="" objectFit="contain"/>
            </div>
        </div>
    );
};

export default Featured;
