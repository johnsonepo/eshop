import { Link } from "react-router-dom";
import IconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const ProductCart = (props)=>{
    const product = props.product;
    const carts = useSelector( (store) => store.cart.items);
    console.log(carts)
    const disPatcher = useDispatch();
    const HandleAddToCart = ()=>{
        disPatcher(addToCart({
            product_id: product.id,
            quantity: 1
        }));
    }
    return(
        <div className=" bg-white p-5 rounded-xl shadow-sm">
            <Link to={`/product/${product.slug}`} >
                <img src={product.image} className=" w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]" />
            </Link>
            <h3 className=" text-2xl py-3 text-center font-medium">{product.name}</h3>
            <div className=" flex justify-between items-center">
                <p className=" ">
                    <span>{product.price}</span> CFA
                </p>
                <button className=" bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2" onClick={HandleAddToCart}>
                    <img src={IconCart} className="w-5"/> 
                    <span>Add To Cart</span>
                </button>
            </div>
        </div>
    )
};
export default ProductCart;