import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import Modal from '@/Components/Modal';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head, Link } from '@inertiajs/react';
import AOS from 'aos';
import React, { useState } from 'react';

export default function Welcome({ auth }) {

    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
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
            <nav className="border-b border-gray-300 bg-cyan-100 dark:border-gray-700 dark:bg-gray-800">
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
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Entrar
                                    </Link>
                                    <Link
                                        href={route('register')}
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
                                        (previousState) => !previousState,
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
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
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
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                user
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                email
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profilador
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="pt-10 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="text-center py-12 sm:py-6" data-aos="zoom-in">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Olá! Somos a Fichários RPG</h2>
                        <p className="text-lg text-gray-600 mb-12">Criador de fichas para diversos sistemas de RPG</p>

                        {/* Image Card */}
                        <div className="flex justify-center mb-12">
                            <div className='w-64 m-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]'>
                                <img className="h-48 p-2 m-auto justify-content-center rounded-lg " src={('./img/4081208.png')} alt="image description" />
                                <p className='text-3x1 font-black text-3xl p-6'> Fichários RPG </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">Nós somos a Ficheiros RPG!</h3>
                                <p className="text-gray-600 mt-2">Um criador de fichas para diversos sistemas de RPG.</p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                                onClick={() => openModal('Este é o conteúdo detalhado do segundo card.')}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">Diversos sistemas inclusos</h3>
                                <p className="text-gray-600 mt-2">D&D, Tormenta 20, Ordem Paranormal, entre outros.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">Atualizações constantes</h3>
                                <p className="text-gray-600 mt-2">Estaremos constantemente atualizando para manter a funcionalidade das fichas para cada sistema.</p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center py-12 animate-fade-up">
                        <div className="overflow-hidden bg-white py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-down">
                                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                    <div className="lg:pt-4 lg:pr-8">
                                        <div className="lg:max-w-lg">
                                            <h2 className="text-base/7 font-semibold text-indigo-600">Nosso Objetivo</h2>
                                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Organizar suas fichas em apenas um lugar!</p>
                                            <p className="mt-6 text-lg/8 text-gray-600">Oferecemos uma plataforma que oferece a possibilidade de criar, gerenciar e compartilhar suas fichas de diversos sistemas de RPG de Mesa que você participa.</p>
                                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                                <div className="relative pl-9">
                                                    <dt className="inline font-semibold text-gray-900">
                                                        <svg className="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" />
                                                        </svg>
                                                        Criação de Fichas 
                                                    </dt>
                                                    <dd className="inline">: Nosso site permite a criação de uma ficha com as características do sistema escolhido, trazendo as habilidades, os atributos e perícias específicos do sistema para ajudar na criação da ficha.</dd>
                                                </div>
                                                <div className="relative pl-9">
                                                    <dt className="inline font-semibold text-gray-900">
                                                        <svg className="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                                                        </svg>
                                                        
                                                    </dt>
                                                    <dd className="inline">: .</dd>
                                                </div>
                                                <div className="relative pl-9">
                                                    <dt className="inline font-semibold text-gray-900">
                                                        <svg className="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                                                            <path fillRule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clipRule="evenodd" />
                                                        </svg>
                                                        .
                                                    </dt>
                                                    <dd className="inline">: .</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <img src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Modal */}
                    <Modal show={modalOpen} onClose={closeModal}>
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold mb-4">Conteúdo do Modal</h2>
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

            </div >

        </>
    );
}
