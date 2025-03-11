import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import AOS from "aos";
import React, { useState } from "react";

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
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
                                Usuário
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                Email
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

            <div className="bg-gray-100 min-h-screen">
                <div className="w-full">
                    <div
                        className="relative w-full h-[50vh] bg-cover bg-center"
                        style={{ backgroundImage: "url('./img/rpg_mesa.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h2 className="text-white text-5xl font-extrabold">
                                Ficha de RPG online para Phantasiae et Conceptus
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section
                        className="text-center py-12 sm:py-6"
                        data-aos="zoom-in"
                    >
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
                            Este é um site com o propósito de ser um criador de
                            fichas
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
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

                            {/* Card 2 */}
                            <div
                                className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                                onClick={() =>
                                    openModal(
                                        "Conheça nossa nova coleção exclusiva!"
                                    )
                                }
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

                            {/* Card 3 */}
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
                    {/* Modal */}
                    <Modal show={modalOpen} onClose={closeModal}>
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold mb-4">
                                Detalhes do Produto
                            </h2>
                            <p>{modalContent}</p>
                            <div className="mt-4">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-300"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
                    <div className="container p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4">
                            {/* <!--First links section--> */}
                            <div className="mb-6">
                                <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                                    {/* Links */}
                                </h5>

                                {/* <ul className="mb-0 list-none">
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 4
                                        </a>
                                    </li>
                                </ul> */}
                            </div>

                            {/* <!--Second links section--> */}
                            {/* <div className="mb-6">
                                <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                                    Links
                                </h5>

                                <ul className="mb-0 list-none">
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div> */}

                            {/* <!--Third links section--> */}
                            {/* <div className="mb-6">
                                <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                                    Links
                                </h5>

                                <ul className="mb-0 list-none">
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div> */}

                            {/* <!--Fourth links section--> */}
                            {/* <div className="mb-6">
                                <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                                    Links
                                </h5>

                                <ul className="mb-0 list-none">
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-neutral-800 dark:text-neutral-200">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    {/* <!--Copyright section--> */}
                    <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                        © 2023 Copyright:
                        <a
                            className="text-neutral-800 dark:text-neutral-400"
                            href="https://tw-elements.com/"
                        >
                            TW Elements
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}
