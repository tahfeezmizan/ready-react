import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill, RiShoppingBagLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = <>
        <NavLink to='/' className="text-center">Home</NavLink>
        <NavLink to='/' className="text-center">Shop</NavLink>
        <NavLink to='/' className="text-center">Features</NavLink>
        <NavLink to='/' className="text-center">Contact</NavLink>
    </>

    return (
        <div className="bg-PrimaryBg shadow-md md:shadow-none py-4 lg:py-8 relative z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <NavLink to={'/'}>
                    <h1 className="text-4xl font-normal">Demo Project</h1>
                </NavLink>

                <div className="flex-1 flex justify-center">
                    <div className={`lg:flex gap-8 lg:static absolute duration-300 ease-in-out ${open ? 'top-16' : 'top-[-200px]'} right-0 lg:right-auto lg:bg-transparent py-5 md:py-5 lg:py-0 bg-PrimaryBg w-full`}>

                        <div className="flex flex-col lg:flex-row gap-3 md:gap-6  items-center justify-center text-xl font-normal w-full">
                            {links}
                        </div>

                        {open && (
                            <div className="flex gap-4 items-center justify-center mt-4 lg:hidden">
                                <div className="text-3xl">
                                    <RiShoppingBagLine />
                                </div>
                                <button className="text-black uppercase text-xl border-2 border-black px-7 py-2 rounded-md flex items-center gap-2">
                                    Login
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:flex items-center justify-between gap-10">
                    <button className="text-black uppercase text-xl  border-2 border-black px-7 py-2 rounded-md items-center gap-2">
                        Login
                    </button>
                </div>

                <div className="text-4xl lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose /> : <RiMenu3Fill />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;