import { Link } from "react-router-dom";
import IconCart from '../assets/images/iconCart.png';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";
const Header = ()=>{
    const carts = useSelector(store => store.cart.items);
    const [totalQty, setTotalQty] = useState(0);
    const disPatcher = useDispatch();
    const HandleOpenCart = ()=>{
        disPatcher(toggleStatusTab())
    }
    useEffect(()=>{
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQty(total)
    },[carts])
    return (
        <header className=" flex justify-between items-center mb-5">
           <Link to='/' className=" text-2xl font-semibold">Home</Link>
           <div className=" flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full relative" onClick={HandleOpenCart}>
                <img src={IconCart} className="w-6"/>
                <span className=" absolute bg-red-500 text-white top-2/3 right-1/2 text-sm w-5 h-5 rounded-full flex justify-center items-center">{totalQty}</span>
           </div>
        </header>
    )
}

export default Header;