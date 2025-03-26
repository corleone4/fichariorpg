export default function Sheets() {
    return (
        <div key={sheet.id} className="p-4 bg-gray-900 shadow-md rounded-lg">
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
                    Acessar Ficha
                </Link>
            </div>
        </div>
    );
}
