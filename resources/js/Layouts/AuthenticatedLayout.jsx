export default function AuthenticatedLayout({ header, children }) {
    return (
        <div className="min-h-screen bg-stone-950">

            {header && (
                <header className="shadow bg-gray-800">
                        {header}
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
