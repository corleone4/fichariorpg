import Modal from '@/Components/Modal';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {


    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-10xl px-4 py-6 sm:px-6 lg:px-8 shadow-2xs">
                        <section className="py-20 px-4 sm:px-8 bg-gray-200 text-center">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12">Ola! Somos a Fichários RPG</h2>
                            <div className='content-center justify-items-center'>
                                <div className='w-64 m-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]'> 
                                    <img className="h-48 m-auto justify-content-center rounded-lg" src={('./img/4081208.png')} alt="image description" />
                                    <p className='text-3x1 font-black text-3xl p-6'> Fichários RPG </p>
                                </div>

                            </div>
                            <div className='flex'>
                                {/* Card 1 */}
                                <div
                                    className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                                >
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

                                {/* Card 3 - Dropdown */}
                                <div
                                    className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800">Atualizações constantes</h3>
                                    <p className="text-gray-600 mt-2">Estaremos constantemente atualizando para manter a funcionalidade das fichas para cada sistema.</p>
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

                </div>
            </div >
        </AuthenticatedLayout >
    );
}
