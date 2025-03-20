import ProductCard from '@/components/reusuable/product-card';
import { allProducts } from '@/utils/allProducts';

const RelatedProducts = () => {

    const products = allProducts();

    return (
        <div className="py-10 md:py-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;