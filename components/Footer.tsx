import Image from "next/image";
import footer from "../styles/Footer.module.scss";
import { NextPage } from "next";

const Footer: NextPage = () => {
    return (
        <div className={footer.container}>
            <div className={footer.item}>
                <Image src="/images/footer-img.jpeg" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={footer.item}>
                <div className={footer.card}>
                    <hr/><br/>
                    <h2 className={footer.motto}>
                        OH YES, WE DID. THE LEAFY FOODS, WELL PREPARED FOODS. ALL DO WITH NATURE.
                    </h2>
                </div>
                <div className={footer.card}>
                    <hr/><br/>
                    <h1 className={footer.title}>FOLLOW US</h1>
                    <br/>
                    <p className={footer.text}>Facebook</p>
                    <p className={footer.text}>Instagram</p>
                    <p className={footer.text}>Youtube</p>
                    <p className={footer.text}>Tiktok</p>
                    <p className={footer.text}>Whatsapp</p>
                </div>
                <div className={footer.card}>
                    <hr/><br/>
                    <h1 className={footer.title}>LOCATION</h1>
                    <br/>
                    <p className={footer.text}>
                        1614 W. Caroll St #125.
                        <br/> NewYork, 85022
                        <br/> (602) 867-1013
                    </p>
                    <br/><br/>
                    <hr/><br/>
                    <h1 className={footer.title}>WORKING HOURS</h1>
                    <br/>
                    <p className={footer.text}>
                        MONDAY UNTIL FRIDAY
                        <br/> <b>9:00 – 22:00</b>
                    </p>
                    <br/>
                    <p className={footer.text}>
                        SATURDAY - SUNDAY
                        <br/> <b>12:00 – 24:00</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
