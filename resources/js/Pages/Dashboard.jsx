import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="p-6 flex flex-col items-center">
                <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                        Fichas
                    </h1>
                    <div className="space-y-4">
                        <Link
                            href={route("new_sheet")}
                            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center text-xl font-semibold px-6 py-4 rounded-lg shadow transition"
                        >
                            Criar Ficha
                        </Link>
                        {/* <Link
                            href={route("sheets")}
                            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center text-xl font-semibold px-6 py-4 rounded-lg shadow transition"
                        >
                            Visualizar Fichas
                        </Link> */}
                    </div>
                </div>
                <div className="w-full max-w-6xl mt-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                        Missões
                    </h1>

                    <div className="space-y-4">
                        <Link
                            href={route("new_sheet")}
                            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center text-xl font-semibold px-6 py-4 rounded-lg shadow transition"
                        >
                            Criar Missão
                        </Link>
                        <button className="block w-full bg-green-500 hover:bg-green-600 text-white text-center text-xl font-semibold px-6 py-4 rounded-lg shadow transition">
                            Visualizar Missões
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
