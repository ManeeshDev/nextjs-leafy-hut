import orders from "../../styles/Orders.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const Order: NextPage = () => {
    const status: number = 0;

    const statusClass = (index: number) => {
        if (index - status < 1) return orders.done;
        if (index - status === 1) return orders.inProgress;
        if (index - status > 1) return orders.undone;
    };

    return (
        <div className={orders.container}>
            <div className={orders.left}>
                <div className={orders.row}>
                    <table className={orders.table}>
                        <tr className={orders.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={orders.tr}>
                            <td>
                                <span className={orders.id}>9237</span>
                            </td>
                            <td>
                                <span className={orders.name}>Maneesh Dev</span>
                            </td>
                            <td>
                                <span className={orders.address}>Galle, Sri Lanka.</span>
                            </td>
                            <td>
                                <span className={orders.total}>Rs. 2800.00</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={orders.row}>
                    <div className={statusClass(0)}>
                        <Image src="/images/paid.png" width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={orders.checkedIcon}>
                            <Image className={orders.checkedIcon} src="/images/checked.png" width={20} height={20} alt=""/>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/images/bake.png" width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={orders.checkedIcon}>
                            <Image className={orders.checkedIcon} src="/images/checked.png" width={20} height={20} alt=""/>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/images/bike.png" width={30} height={30} alt="" />
                        <span>On the way</span>
                        <div className={orders.checkedIcon}>
                            <Image className={orders.checkedIcon} src="/images/checked.png" width={20} height={20} alt=""/>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/images/delivered.png" width={30} height={30} alt="" />
                        <span>Delivered</span>
                        <div className={orders.checkedIcon}>
                            <Image className={orders.checkedIcon} src="/images/checked.png" width={20} height={20} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={orders.right}>
                <div className={orders.wrapper}>
                    <h2 className={orders.title}>CART TOTAL</h2>
                    <div className={orders.totalText}>
                        <b className={orders.totalTextTitle}>Subtotal:</b>Rs. 2800.00
                    </div>
                    <div className={orders.totalText}>
                        <b className={orders.totalTextTitle}>Discount:</b>Rs. 0.00
                    </div>
                    <div className={orders.totalText}>
                        <b className={orders.totalTextTitle}>Total:</b>Rs. 2800.00
                    </div>
                    <button disabled className={orders.button}>PAID</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
