import Link from 'next/link';

const SingleProduct = ({ product }) => {
    const { id, title, imageurl } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className="rounded-t-2xl"src={imageurl} alt="Loading..." />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <Link href={`/products/${id}`} className='btn btn-primary btn-wide mx-auto'>Detail</Link>
            </div>
        </div>
    );
};

export default SingleProduct;