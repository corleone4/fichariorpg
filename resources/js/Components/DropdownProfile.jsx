import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";

export default function DropdownProfile() {
    const user = usePage().props.auth.user;
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        
                        className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-white hover:text-white/80 focus-visible:ring-white leading-4 transition duration-150 ease-in-out focus:outline-none bg-neutral-800"
                    >
                        {user.name ? user.name : "Usuário"}

                        <svg
                            className="-me-0.5 ms-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link href={route("profile.edit")}>
                    Perfil
                </Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                    Sair
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
}
