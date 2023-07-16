import SingleCategory from "@/app/components/home/SingleCategory";
import getCategories from "@/app/utils/getCategories";

import Link from "next/link";

const Categories = async () => {
    const categories = await getCategories();

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold mb-10">Total Category: {categories.length}</h1>
            <div className="grid grid-cols-3">
                {
                    categories.map(category => <SingleCategory
                        key={category.id}
                        category={category}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;