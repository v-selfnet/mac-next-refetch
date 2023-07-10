

import loadBlogData from "@/app/utils/loadBlogData";
import Link from "next/link";

const BlogPage = async () => {
    const blogs = await loadBlogData();
    
    return (

        <div className="overflow-x-auto w-2/4 mx-auto">
            <h1>Total Blogs: {blogs.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Blogs Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map(({ id, title }) => <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <Link href={`/blogs/${id}`}>
                                <button className="btn btn-xs">Detail</button>
                            </Link>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default BlogPage;