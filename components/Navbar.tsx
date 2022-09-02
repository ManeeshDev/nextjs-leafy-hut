import Image from "next/image";
import navbar from "../styles/Navbar.module.scss";
import { NextPage } from "next";

const Navbar: NextPage = () => {
    return (
        <div className={navbar.container}>
            <div className={navbar.item}>
                <div className={navbar.callButton}>
                    <a href="tel:0766171525">
                        <Image src="/images/telephone.png" alt="" width="32" height="32" />
                    </a>
                </div>
                <div className={navbar.texts}>
                    <div className={navbar.text}>ORDER NOW!</div>
                    <div className={navbar.text}><a href="tel:0766171525">+94 766171525</a></div>
                </div>
            </div>
            <div className={navbar.item}>
                <ul className={navbar.list}>
                    <li className={navbar.listItem}><a href="./">Home</a></li>
                    <li className={navbar.listItem}>Products</li>
                    <li className={navbar.listItem}>Menu</li>
                    <a href="./">
                        <Image src="/images/leafyHut-logo.png" alt="" width="160px" height="69px" />
                    </a>
                    <li className={navbar.listItem}>Events</li>
                    <li className={navbar.listItem}>Blog</li>
                    <li className={navbar.listItem}>Contact</li>
                </ul>
            </div>
            <div className={navbar.item}>
                <div className={navbar.cart}>
                    <Image src="/images/cart.png" alt="" width="30px" height="30px" />
                    <div className={navbar.counter}>0</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
