import getCategories from "@/app/utils/getCategories";
import Image from "next/image";


const Categories = async () => {
    const categories = await getCategories();
    return (
        <div>
            {categories.length}
            {
                categories.map(({ id, name, imageurl }) => <div
                    key={id}
                    className="card w-96 bg-base-100 shadow-xl">
                    <img src={imageurl} alt="Loading..." />
                    <div className="card-body">
                    <div className="badge badge-secondary">{id}</div>
                        <h2 className="card-title">{name}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Detail</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Categories;