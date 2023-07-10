import loadBlogData from "@/app/utils/loadBlogData";
import loadSingleBlogData from "@/app/utils/loadSingleBlogData";
import Link from "next/link";

//dynamic metadata
export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);
    return {
        title: title
    }
}

// convwer dynamic to static
export const generateStaticParams = async () => {
    const blogs = await loadBlogData();

    return blogs.map(({ id }) => ({
        id: id.toString()
    }));

}

const SingleBlogPage = async ({ params }) => {

    const { id, title, body } = await loadSingleBlogData(params.id);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="badge badge-secondary">Requested iD: {id}</div>
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <Link href='/blogs'>
                        <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default SingleBlogPage;