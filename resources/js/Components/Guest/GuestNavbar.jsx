import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";


export default function GuestNavbar({children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const user = usePage().props.auth.user;
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                color
                    ? "bg-gray-800 border-gray-700 shadow-md"
                    : "bg-transparent border-gray-200"
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/">
                        <ApplicationLogo
                            image="./img/logo.png"
                            className="h-9 w-auto text-gray-800 dark:text-gray-200"
                        />
                    </Link>

                    <div className="hidden sm:flex items-center space-x-4">
                        {children}
                    </div>

                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                !showingNavigationDropdown
                            )
                        }
                        className="sm:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-md"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
