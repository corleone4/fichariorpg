export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-neutral-950 pt-6 sm:justify-center sm:pt-0">

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-neutral-800">
                {children}
            </div>
        </div>
    );
}
