import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import { Head } from "@inertiajs/react";

export default function SheetsIndex({sheet}) {
    return (
        <AuthenticatedLayout>
            <Head title="Ver Ficha" />
            <div className="w-full h-30 border-white p-12 border">
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 border-red-200 border">
                            <InputLabel
                                htmlFor="c_name"
                                value="Nome do Personagem"
                            />
                            <TextInput
                                id="c_name"
                                type="text"
                                value={sheet.c_name}
                                className="w-full mt-2"
                                readonly
                            />
                        </div>
                        <div className="p-6 border-red-200 border">
                            <InputLabel
                                htmlFor="c_name"
                                value="Nome do Personagem"
                            />
                            <TextInput
                                id="c_name"
                                type="text"
                                value={sheet.c_name}
                                className="w-full mt-2"
                                readonly
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="p-6  border-red-200 border"></div>
                        <div className="p-6  border-red-200 border"></div>
                        <div className="p-6 col-span-2 border-red-200 border"></div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
