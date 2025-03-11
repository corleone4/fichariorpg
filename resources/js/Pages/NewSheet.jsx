import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function NewSheet() {
    const [remainingPoints, setRemainingPoints] = useState(30); // Exempl

    const { data, setData, post, processing, errors, reset } = useForm({
        c_name: "",
        c_age: "",
        c_level: "",
        c_race: "",
        c_origin: "",
        c_class: "",
        c_str: 10,
        c_dex: 10,
        c_vig: 10,
        c_dis: 10,
        c_know: 10,
        c_cat: 10,
        c_spi: 10,
    });

    const races = [
        "Humano",
        "Anão",
        "Dahllan",
        "Elfo",
        "Goblin",
        "Lefou",
        "Minotauro",
        "Qareen",
        "Golem",
        "Hynne",
        "Kliren",
        "Medusa",
        "Osteon",
        "Sereia/Tritão",
        "Sílfide",
        "Suraggels (Aggelus)",
        "Suraggels (Sulfure)",
        "Trog",
    ];
    const origins = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const classes = [
        "10",
        "29",
        "39",
        "48",
        "56",
        "645",
        "73",
        "82",
        "95",
        "01",
    ];

    const submit = (e) => {
        e.preventDefault();
        post(route("sheets.create"), {
            onFinish: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Nova ficha" />
            <h1 className="text-2xl mt-6 font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                Criar Nova Ficha
            </h1>
            <div className="max-w-6xl mx-auto mt-6 p-6 bg-white dark:bg-slate-800 dark:text-gray-300 shadow-lg rounded-lg">
                <form onSubmit={submit} className="w-full">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Coluna esquerda */}
                        <div className="w-full md:w-1/2">
                            <div className="w-full">
                                {/* Nome */}
                                <InputLabel
                                    htmlFor="c_name"
                                    value="Nome do seu personagem"
                                />
                                <TextInput
                                    id="c_name"
                                    type="text"
                                    name="c_name"
                                    value={data.c_name}
                                    className="mt-1 w-full"
                                    onChange={(e) =>
                                        setData("c_name", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.c_name}
                                    className="mt-2"
                                />

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                    {/* Idade */}
                                    <div>
                                        <InputLabel
                                            htmlFor="c_age"
                                            value="Idade"
                                        />
                                        <TextInput
                                            id="c_age"
                                            type="text"
                                            name="c_age"
                                            value={data.c_age}
                                            className="mt-1 w-full"
                                            onChange={(e) =>
                                                setData("c_age", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.c_age}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Nível */}
                                    <div>
                                        <InputLabel
                                            htmlFor="c_level"
                                            value="Nível"
                                        />
                                        <TextInput
                                            id="c_level"
                                            type="text"
                                            name="c_level"
                                            value={data.c_level}
                                            className="mt-1 w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "c_level",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.c_level}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Raça */}
                                    <div className="col-span-2 md:col-span-1">
                                        <InputLabel
                                            htmlFor="c_race"
                                            value="Raça"
                                        />
                                        <select
                                            id="c_race"
                                            name="c_race"
                                            value={data.c_race}
                                            onChange={(e) =>
                                                setData(
                                                    "c_race",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 w-full border-gray-300 dark:border-gray-400 dark:text-gray-400 dark:focus:dark:text-gray-500 dark:bg-transparent rounded-md shadow-sm"
                                            required
                                        >
                                            <option value="">
                                                Selecione uma raça
                                            </option>
                                            {races.map((race, index) => (
                                                <option
                                                    key={index}
                                                    value={race}
                                                >
                                                    {race}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Origem */}
                                    <div className="col-span-2 md:col-span-1">
                                        <InputLabel
                                            htmlFor="c_origin"
                                            value="Origem"
                                        />
                                        <select
                                            id="c_origin"
                                            name="c_origin"
                                            value={data.c_origin}
                                            onChange={(e) =>
                                                setData(
                                                    "c_origin",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 w-full border-gray-300 dark:border-gray-400 dark:text-gray-400 dark:focus:dark:text-gray-500 dark:bg-transparent rounded-md shadow-sm"
                                            required
                                        >
                                            <option value="">
                                                Selecione uma origem
                                            </option>
                                            {origins.map((origins, index) => (
                                                <option
                                                    key={index}
                                                    value={origins}
                                                >
                                                    {origins}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Classes */}
                                    <div className="col-span-2 md:col-span-1">
                                        <InputLabel
                                            htmlFor="c_class"
                                            value="Classe"
                                        />
                                        <select
                                            id="c_class"
                                            name="c_class"
                                            value={data.c_class}
                                            onChange={(e) =>
                                                setData(
                                                    "c_class",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 w-full border-gray-300 dark:border-gray-400 dark:text-gray-400 dark:focus:dark:text-gray-500 dark:bg-transparent rounded-md shadow-sm"
                                            required
                                        >
                                            <option value="">
                                                Selecione uma classe
                                            </option>
                                            {classes.map((classes, index) => (
                                                <option
                                                    key={index}
                                                    value={classes}
                                                >
                                                    {classes}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna direita */}
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { id: "c_str", name: "Força" },
                                    { id: "c_dex", name: "Destreza" },
                                    { id: "c_vig", name: "Vigor" },
                                    { id: "c_dis", name: "Discernimento" },
                                    { id: "c_know", name: "Conhecimento" },
                                    { id: "c_cat", name: "Cativação" },
                                    { id: "c_spi", name: "Espírito" },
                                ].map((attr) => (
                                    <div key={attr.id} className="w-full">
                                        <label
                                            htmlFor={attr.id}
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            {attr.name}
                                        </label>
                                        <TextInput
                                            id={attr.id}
                                            type="number"
                                            name={attr.id}
                                            value={data[attr.id]}
                                            onChange={(e) => {
                                                const value =
                                                    parseInt(e.target.value) ||
                                                    10;
                                                setData(attr.id, value);

                                                if (value === 12) {
                                                    setRemainingPoints(
                                                        (prev) => prev - 2
                                                    );
                                                }
                                            }}
                                            className="w-full text-center text-xl h-20 p-2 appearance-none"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="grid gap-4">
                                <p> Pontos restantes: {remainingPoints}</p>
                            </div>
                        </div>
                    </div>

                    {/* Botão de envio */}
                    <div className="flex justify-center mt-6">
                        <PrimaryButton
                            type="submit"
                            className="w-full md:w-auto"
                            disabled={processing}
                        >
                            Criar Ficha
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
