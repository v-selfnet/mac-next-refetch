import getSingleProduct from '@/app/utils/getSingleProduct';


const ProductSinglePage = async ({params}) => {
    const product = await getSingleProduct(params.id);
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>Features: {product.features.map(feature => feature)}</h1>
        </div>
    );
};

export default ProductSinglePage;