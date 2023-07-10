import SingleCategory from "@/app/components/home/SingleCategory";
import getCategories from "@/app/utils/getCategories";

import Link from "next/link";

const Categories = async () => {
    const categories = await getCategories();
    

    return (
        <div>
            <h1>Total Category: {categories.length}</h1>
            <div>
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