import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, sheets }) {
    const [openAccordion, setOpenAccordion] = useState(false);
    const sheetCounter = sheets.length;
    function handleAccordion() {
        setOpenAccordion((prev) => !prev);
    }
    const user = auth.user
    return (
         <AuthenticatedLayout user={user}>
            <Head title="Dashboard" />
            <div className="p-6 flex flex-col items-center">
                <div
                    className={`w-full bg-gray-800 max-w-6xl transition-all rounded-lg shadow-lg p-6`}
                >
                    <div className="flex justify-center">
                        <div className="justify-center items-center w-[4vw]">
                            <h2 className="text-2xl font-bold text-gray-200 text-center">
                                {sheetCounter ?? 0}/6
                            </h2>
                        </div>
                        <div className="justify-start w-[92vw]">
                            <h1 className="text-4xl font-bold text-gray-200 text-center">
                                Personagens
                            </h1>
                        </div>
                        <div className="justify-center items-center w-[4vw]">
                            <button
                                className="text-gray-200"
                                onClick={handleAccordion}
                            >
                                {openAccordion ? "Fechar" : "Abrir"}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`duration-700 ${
                            openAccordion
                                ? "max-h-[70vh] opacity-100 duration-400"
                                : "max-h-0 overflow-hidden opacity-0"
                        }`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                            {sheets.length > 0 ? (
                                sheets.map((sheet) => (
                                    <div
                                        key={sheet.id}
                                        className="p-4 bg-gray-900 shadow-md rounded-lg"
                                    >   
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                            {sheet.c_name}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <strong>Raça:</strong>{" "}
                                            {sheet.c_race}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <strong>Classe:</strong>{" "}
                                            {sheet.c_class}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <strong>Nível:</strong>{" "}
                                            {sheet.c_level}
                                        </p>
                                        <div className="mt-4">
                                            <Link
                                                href={`/sheets/find/${sheet.id}`}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                            >
                                                Acessar Ficha
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-16 bg-gray-900 shadow-md rounded-lg mx-auto">
                                    <h1 className="text-gray-200">
                                        Nenhuma ficha cadastrada.
                                    </h1>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <Link
                                href={route("new_sheet")}
                                className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center text-xl font-semibold px-6 py-4 rounded-lg shadow transition"
                            >
                                Criar Novo Personagem
                            </Link>
                        </div>
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
