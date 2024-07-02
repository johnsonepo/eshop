import { useState, useEffect } from "react";
import DemoProducts from '../DemoProducts.jsx'
import { changeQuantity } from "../store/cart.jsx";
import { useDispatch } from "react-redux";
const CartItem = (props)=>{
    const {product_id, quantity} = props.item;
    const [product, setProduct] = useState({});
    const disPatcher = useDispatch();
    const HandleMinusQty = ()=>{
        disPatcher(changeQuantity({
            product_id: product_id,
            quantity: quantity - 1
        }))
    };
    const HandlePlusQty = ()=>{
        disPatcher(changeQuantity({
            product_id: product_id,
            quantity: quantity + 1
        }))
    };
    useEffect(()=>{
        const find_product = DemoProducts.find(p => p.id === product_id);
        setProduct(find_product);
    }, [product_id]);
    if (!product) {
        return null; 
    }
    console.log(product.price , quantity)
    const total = product.price * quantity;
    return (
        <div className=" bg-slate-600 text-white flex justify-between items-center p-2 border-b-2 border-slate-700 gap-5 rounded">
            <img src={product.image} className=" w-12" />
            <h3>{product.name}</h3>
            <p>{!isNaN(total) ? total : 0} CFA</p>
            <div className=" w-20 flex justify-between gap-2">
                <button className=" bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={HandleMinusQty}>-</button>
                <span>{quantity}</span>
                <button className=" bg-gray-200 rounded-full w-6 h-6 text-cyan-600" onClick={HandlePlusQty}>+</button>
            </div>
        </div>
    );
};

export default CartItem;