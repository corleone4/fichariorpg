import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Sheets({ sheets }) {
    return (
        <AuthenticatedLayout>
            <Head title="Fichas" />
            <div className="p-6 flex flex-col items-center">
                <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                        Fichas
                    </h1>

                    {/* Lista de fichas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sheets.length > 0 ? (
                            sheets.map((sheet) => (
                                <div
                                    key={sheet.id}
                                    className="p-4 bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg"
                                >
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                        {sheet.c_name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <strong>Raça:</strong> {sheet.c_race}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <strong>Classe:</strong> {sheet.c_class}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <strong>Nível:</strong> {sheet.c_level}
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            href={`/sheets_index/${sheet.id}`}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        >
                                            Ver detalhes
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Nenhuma ficha cadastrada.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
