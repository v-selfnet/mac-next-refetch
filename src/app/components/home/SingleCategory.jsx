import Link from 'next/link';

const SingleCategory = ({ category }) => {
    const { id, name, description, imageurl } = category;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageurl} alt="Loading..." /></figure>
                <div className="card-body">
                    <h2 className={"card-title"}>{name}</h2>
                    <p>{description}</p>
                    <Link
                        className="btn btn-wide btn-primary mx-auto mt-6"
                        href={`products?categoryId=${id}`}>
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;