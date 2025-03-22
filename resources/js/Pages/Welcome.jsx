import ApplicationLogo from "@/Components/ApplicationLogo";
import Modal from "@/Components/Modal";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link} from "@inertiajs/react";
import React, { useState } from "react";
import Footer from "@/Components/Footer";
import DropdownProfile from "@/Components/DropdownProfile";

export default function Welcome({ auth }) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title="Welcome" />
            <nav className="border-b border-gray-300 bg-white dark:border-gray-700 dark:bg-neutral-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            {auth.user ? (
                                <>
                                    <DropdownProfile/>
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Entrar
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Registrar
                                    </Link>
                                </>
                            )}
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
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
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {/* {user.name} */}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {/* {user.email} */}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Perfil
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Sair
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-slate-950 min-h-screen">
                <div className="w-full">
                    <div
                        className="w-full h-[92vh] flex bg-black gap-2"
                    >
                        <div className="flex flex-col justify-start items-center w-[50vw]">
                            <div className="flex flex-col justify-end py-2 h-1/2 items-center">
                                <h2 className="text-white w-2/3 text-start text-6xl font-extrabold">
                                    Criador de fichas de agentes para RPG de mesa.
                                </h2>
                            </div>
                            <div className="flex flex-col justify-start w-full h-1/2 items-center">
                                <h2 className="text-gray-300 w-2/3 py-6 text-2xl font-regular">
                                    Um criador de fichas inteligente para otimizar a sua experiência!
                                </h2>
                            </div>
                            
                        </div>
                        <div className="px-20 py-10 w-[50vw]">
                            <h2 className="text-white text-5xl font-extrabold">
                                <img src={"./img/rpg-vector.png"}/>
                            </h2>
                        </div>
                        
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <section className="text-center py-24" data-aos="zoom-in">
                        <h2 className="text-4xl font-extrabold text-gray-200 mb-8">
                            Este é um site com o propósito de ser um criador de
                            fichas
                        </h2>
                        <p className="text-lg text-gray-500 mb-12">
                            De forma mais automática e simplificada, aumentando
                            a praticidade
                        </p>

                        {/* Feature Cards */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Cálculos já feitos automaticamente
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Com este site, todas as informações que
                                    necessitam de um cálculo já serão feitas
                                    automaticamente com o preenchimento de
                                    certas áreas da ficha.
                                </p>
                            </div>

                            <div
                                className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Possibilidade de atualizações
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Caso ocorram atualizações no sistema, aqui
                                    também será atualizado, sem a necessidade de
                                    ter que preencher outra ficha manualmente
                                </p>
                            </div>

                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Sem custos
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    É totalmente acessível e grátis para uso. É
                                    um projeto feito para auxiliar na mesa,
                                    apenas peço para que considerem usá-lo :D
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
}
