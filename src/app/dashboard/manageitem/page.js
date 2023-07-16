import SingleProduct from "@/app/components/dashboard/SingleProduct";

const ManageItem = async () => {
    const res = await fetch('http://localhost:5000/products', {
        cache: 'no-cache'
    })
    const products = await res.json();

    return (
        <div>
            <h1>/Dashboard/ManageItem</h1>
            <h1>{products.length}</h1>

            {/* <div className="overflow-x-auto"> */}
                <table className="table w-4/3 mx-auto">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th className="w-10px">Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Features</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map(product => <SingleProduct
                                key={product.id}
                                product={product}
                            ></SingleProduct>)
                        }
                    </tbody>
                </table>
            {/* </div> */}
        </div>
    );
};

export default ManageItem;