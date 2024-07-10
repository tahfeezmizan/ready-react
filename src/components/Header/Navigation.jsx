import { NavLink } from "react-router-dom";


const Navigation = () => {

    const links = [
        {
            pathName: '/',
            name: 'Home'
        },
        {
            pathName: '/about',
            name: 'About'
        },
        {
            pathName: '/services',
            name: 'Services'
        }
    ]

    return (
        <div className="bg-gray-50">
            <div className="w-full md:w-8/12 mx-auto text-center py-4">
                <div className="flex justify-between px-1">
                    <h2 className="logo text-2xl font-semibold">Logo</h2>

                    <ul className="flex gap-5 text-xl">
                        {
                            links.map(link => <li>
                                <NavLink to={link.pathName}>{link.name}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;