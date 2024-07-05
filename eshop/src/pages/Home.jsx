import ProductCart from "../components/ProductCart";
import DemoProducts from "../DemoProducts.jsx";
const Home = ()=>{
    return (
        <div>
            <h1 className=" mb-5">Products list</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {DemoProducts.map((product, key)=>(
                    <ProductCart key={key} product={product}/>
                    )
                )}
            </div>
        </div>
    );
};

export default Home;