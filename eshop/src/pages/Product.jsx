import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DemoProducts from "../DemoProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart";
import ProductGallery from "../components/ProductGallery";

const Product = ()=>{
    const carts = useSelector(store=>store.cart.items);
    const {slug} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1)

    const HandleMinusQty = ()=>{
        setQuantity(quantity-1 < 1 ? 1 : quantity-1);
    }
    const HandlePlusQty = ()=>{
        setQuantity(quantity + 1)
    }
    const disPatcher = useDispatch();
    const HandleAddToCart = ()=>{
        disPatcher(addToCart({
            product_id: product.id,
            quantity: quantity
        }));
    }
 
    useEffect(()=>{
        const find_product = DemoProducts.filter(product => product.slug === slug);
        if(find_product.length > 0){
            setProduct(find_product[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    return (
        <div className="">
           <h2 className="text-3xl text-center uppercase"> Product Detail</h2>
           <div className=" grid grid-cols-2 gap-1 md:gap-5 mt-5">
                <div className="grid grid-cols-12">
                    <div className=" col-span-0 sm:col-span-4">
                        <ProductGallery slug = {product.slug}/>
                    </div>
                    <img src={product.image} className="w-full col-span-12 sm:col-span-8" />
                </div>
                <div className=" flex flex-col gap-5">
                    <h1 className="text-xl md:text-4xl uppercase font-bold ">{product.name}</h1>
                    <p className=" font-bold text-3xl">
                        {product.price} CFA
                    </p>
                    <div className=" space-y-2 sm:flex gap-5">
                        <div className=" flex gap-2 sm:justify-center items-center">
                            <button className=" bg-gray-100 h-8 sm:h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={HandleMinusQty}>-</button>
                            <span className=" bg-gray-200 h-8 sm:h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                            <button className=" bg-gray-100 h-8 sm:h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={HandlePlusQty}>+</button>
                        </div>
                        <button className=" bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl" onClick={HandleAddToCart}>
                            Add To Cart
                        </button>
                    </div>
                    <p>
                        {product.description}
                    </p>
                </div>
           </div>
        </div>
    );
};

export default Product;