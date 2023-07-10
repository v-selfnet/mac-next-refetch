import Link from "next/link";

const navitem = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/additem',
        title: 'Add Item'
    },
    {
        path: '/dashboard/manageitem',
        title: 'Manage Item'
    },
    {
        path: '/',
        title: 'Home'
    },
]

const Sidebar = () => {
    return (
        <div className="bg-pink-200 h-[100vh] p-10">
            <h1 className="text-2xl text-center">Welcome to Dashboard</h1>
            <div className="divider"></div>
            <div>
                {
                    navitem.map(({ path, title }) => <Link
                        className="flex"
                        href={path} key={path}
                    >
                        {title}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Sidebar;