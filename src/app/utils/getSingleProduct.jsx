import Wait from "./wait";

const getSingleProduct = async (id) => {
    await Wait();
    const res = await fetch(`http://localhost:5000/products/${id}`, {
        cache: 'no-cache'
    })
    return res.json();
};

export default getSingleProduct;