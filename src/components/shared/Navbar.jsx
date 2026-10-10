import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navItems = [
        { name: "Work Out", href: "/workout" },
        { name: "My Plan", href: "/myplan" },
    ];

    return (
        <div className="border-b border-gray-200">
            <div className="navbar container mx-auto bg-base-100 px-4">

              
                <div className="navbar-start">
               
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={logo}
                            alt="FITLOG logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <span className="text-xl font-bold">
                            FITLOG
                        </span>
                    </Link>
                </div>

                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

              
                <div className="navbar-end gap-3">
                    <p className="flex items-center gap-2">
                        Plan
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                            0
                        </span>
                    </p>

                    <p className="flex items-center gap-2">
                        Saved
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                            0
                        </span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

