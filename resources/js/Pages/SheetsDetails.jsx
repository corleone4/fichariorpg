import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function SheetsIndex({ auth, sheet }) {
    const user = auth.user;
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Ver Ficha" />
            <div className="lg:w-3/4 sm:w-full mx-auto lg:mt-4 sm:mt-0 bg-neutral-900 h-30 border-gray-700 p-12 border">
                <div className="grid gap-4">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div>
                            <InputLabel
                                htmlFor="c_name"
                                value="Nome do Personagem"
                            />
                            <TextInput
                                id="c_name"
                                type="text"
                                value={sheet.c_name}
                                className="w-full mt-2"
                                readOnly
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="user_name"
                                value="Nome do Jogador"
                            />
                            <TextInput
                                id="user_name"
                                type="text"
                                value={user.name}
                                className="w-full mt-2"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
                        <div>
                            <InputLabel
                                htmlFor="c_race"
                                value="Raça do Personagem"
                            />
                            <TextInput
                                id="c_race"
                                type="text"
                                value={sheet.c_race}
                                className="w-full mt-2"
                                readOnly
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="c_origin"
                                value="Origem do Personagem"
                            />
                            <TextInput
                                id="user_name"
                                type="text"
                                value={sheet.c_origin}
                                className="w-full mt-2"
                                readOnly
                            />
                        </div>
                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="c_class"
                                value="Classe do Personagem"
                            />
                            <TextInput
                                id="user_name"
                                type="text"
                                value={sheet.c_class}
                                className="w-full mt-2"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 gap-4 sm:grid-cols-2">
                        {[
                            { name: "Força", attr: "c_str", value: sheet.c_str},
                            { name: "Destreza", attr: "c_dex", value: sheet.c_dex },
                            { name: "Constituição", attr: "c_con", value: sheet.c_con},
                            { name: "Inteligência", attr: "c_int", value: sheet.c_int},
                            { name: "Sabedoria", attr: "c_wisd",value: sheet.c_wisd },
                            { name: "Carisma", attr: "c_char", value: sheet.c_char},
                        ].map(({ attr, name, value }) => (
                            <div
                                key={attr}
                                className="bg-gray-800 p-2 rounded-lg shadow-md"
                            >
                                <InputLabel
                                    htmlFor={attr}
                                    value={name.toUpperCase()}
                                />
                                <TextInput
                                    id={attr}
                                    type="number"
                                    value={value}
                                    onChange={(e) =>
                                        handleChange(attr, e.target.value)
                                    }
                                    className="w-full text-center text-xl mt-2 bg-gray-700 border-none"
                                />
                                <p className="text-sm text-gray-400 mt-1">
                                    Modificador:
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
