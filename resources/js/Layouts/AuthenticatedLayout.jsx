import Navbar from "@/Components/Navbar";

export default function AuthenticatedLayout({user, header, children }) {
    
    return (
        <div className="min-h-screen bg-stone-950">
            <Navbar user={user}/>
            {header && (
                <header className="shadow bg-gray-800">
                        {header}
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
