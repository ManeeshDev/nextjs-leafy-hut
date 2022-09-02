import cart from "../styles/Cart.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const Cart: NextPage = () => {
    return (
        <div className={cart.container}>
            <div className={cart.left}>
                <table className={cart.table}>
                    <tr className={cart.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={cart.tr}>
                        <td>
                            <div className={cart.imgContainer}>
                                <Image src="/images/foods/beef-pepperoni.png" layout="fill" objectFit="cover" alt=""/>
                            </div>
                        </td>
                        <td>
                            <span className={cart.name}>CORALZO</span>
                        </td>
                        <td>
                          <span className={cart.extras}>
                            Double ingredient, spicy sauce
                          </span>
                        </td>
                        <td>
                            <span className={cart.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={cart.quantity}>2</span>
                        </td>
                        <td>
                            <span className={cart.total}>$39.80</span>
                        </td>
                    </tr>
                    <tr className={cart.tr}>
                        <td>
                            <div className={cart.imgContainer}>
                                <Image src="/images/foods/beef-pepperoni.png" layout="fill" objectFit="cover" alt=""/>
                            </div>
                        </td>
                        <td>
                            <span className={cart.name}>CORALZO</span>
                        </td>
                        <td>
                          <span className={cart.extras}>
                            Double ingredient, spicy sauce
                          </span>
                        </td>
                        <td>
                            <span className={cart.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={cart.quantity}>2</span>
                        </td>
                        <td>
                            <span className={cart.total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={cart.right}>
                <div className={cart.wrapper}>
                    <h2 className={cart.title}>CART TOTAL</h2>
                    <div className={cart.totalText}>
                        <b className={cart.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={cart.totalText}>
                        <b className={cart.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={cart.totalText}>
                        <b className={cart.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button className={cart.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
