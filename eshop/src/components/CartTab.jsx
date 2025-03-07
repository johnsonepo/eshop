import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem.jsx";
import { toggleStatusTab } from "../store/cart.jsx";
import { useEffect, useState } from "react";
import DemoProducts from "../DemoProducts";

const CartTab = ()=>{
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector( store => store.cart.statusTab);
    const disPatcher = useDispatch();
    const HandleCloseCart = ()=>{
        disPatcher(toggleStatusTab())
    }
    console.log(carts);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = carts.reduce((accumulator, cartItem) => {
            const product = DemoProducts.find(product => product.id === cartItem.product_id);
            if (product) {
                const productTotal = product.price * cartItem.quantity;
                return accumulator + productTotal;
            }
            return accumulator;
        }, 0);

        setTotalPrice(newTotalPrice);
    }, [carts]);

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-full sm:w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : "" }`}>
           <h1 className=" p-5 text-white text-2xl">Shorping cart: {`${totalPrice} CFA`}</h1>
           <div className=" p-5">
                {carts.map((item, key)=> (
                    <CartItem key={key} item={item}/>
                ))}
           </div>
           
           <div className=" grid grid-cols-2">
                <button className=" bg-black text-white uppercase" onClick={HandleCloseCart}>Close</button>
                <button className=" bg-amber-600 text-white uppercase">Checkout</button>
           </div>
        </div>
    );
};

export default CartTab;