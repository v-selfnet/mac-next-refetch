import SingleProduct from '@/app/components/home/SingleProduct';
import getProducts from '@/app/utils/getProducts';


const ProductsPage = async ({ searchParams }) => {
    const products = await getProducts(searchParams.categoryId)
    return (
        <div>
            <h1>Total Products: {products.length}</h1>
            {
                products.map(product => <SingleProduct
                    key={product.id}
                    product={product}
                ></SingleProduct>)
            }
        </div>
    );
};

export default ProductsPage;