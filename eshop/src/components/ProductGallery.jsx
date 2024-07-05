import { useEffect, useState } from "react";
import DemoProducts from "../DemoProducts";

const ProductGallery = ({ slug }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const find_product = DemoProducts.find(product => product.slug === slug);
        if (find_product) {
            setProduct(find_product);
        }
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {product.gallery.map((image, key) => (
                <img key={key} src={image} className="w-0 sm:w-24" alt={`Product Image ${key + 1}`} />
            ))}
        </div>
    );
}

export default ProductGallery;
