import Link from "next/link";

const navItem = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
]

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-10 bg-pink-200 rounded-br-full">
            <h1>Next hero</h1>
            <div>
                {
                    navItem.map(({ path, title }) => <Link
                        className="ml-4"
                        href={path}
                        key={path}
                    >
                        {title}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;