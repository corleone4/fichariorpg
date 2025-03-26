import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
export default function NewSheet({ classes, origins, races }) {
    const user = usePage().props.auth.user;
    const [remainingPoints, setRemainingPoints] = useState(20);
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: user.id,
        c_name: "",
        c_age: "",
        c_level: "",
        c_race: "",
        c_origin: "",
        c_class: "",
        c_str: 10,
        c_dex: 10,
        c_vig: 10,
        c_int: 10,
        c_wisd: 10,
        c_char: 10,
    });

    const getAttributeCost = (value) => {
        const costTable = {
            8: -2,
            9: -1,
            10: 0,
            11: 1,
            12: 2,
            13: 3,
            14: 4,
            15: 6,
            16: 8,
            17: 11,
            18: 14,
        };
        return costTable[value] || 0;
    };

    useEffect(() => {
        const spentPoints =
            getAttributeCost(data.c_str) +
            getAttributeCost(data.c_dex) +
            getAttributeCost(data.c_vig) +
            getAttributeCost(data.c_int) +
            getAttributeCost(data.c_wisd) +
            getAttributeCost(data.c_char);

        setRemainingPoints(20 - spentPoints);
    }, [data]);

    const handleChange = (attr, value) => {
        let newValue = parseInt(value) || 10;
        if (newValue < 8) newValue = 8;
        if (newValue > 18) newValue = 18;
        setData(attr, newValue);
    };

    const calculateModifier = (value) => Math.floor((value - 10) / 2);

    const submit = (e) => {
        if (remainingPoints >= 0) {
            e.preventDefault();
            post(route("sheets.create"), {
                onFinish: () => reset(),
            });
        } else {
            alert("Verifique os pontos gastos!");
        }
    };

    return (
        <AuthenticatedLayout header={<Navbar/>}>
            <Head title="Nova Ficha" />
            <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-900 text-gray-100 shadow-2xl rounded-lg border border-gray-700">
                <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">
                    Criar Nova Ficha
                </h1>
                <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <InputLabel
                                htmlFor="c_name"
                                value="Nome do Personagem"
                            />
                            <TextInput
                                id="c_name"
                                type="text"
                                value={data.c_name}
                                className="w-full mt-2"
                                onChange={(e) =>
                                    setData("c_name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.c_name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="c_age" value="Idade" />
                            <TextInput
                                id="c_age"
                                type="text"
                                value={data.c_age}
                                className="w-full mt-2"
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
                        <div>
                            <InputLabel htmlFor="c_level" value="Nível" />
                            <TextInput
                                id="c_level"
                                type="text"
                                value={data.c_level}
                                className="w-full mt-2"
                                onChange={(e) =>
                                    setData("c_level", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.c_level}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { id: "c_race", name: "Raça", options: races },
                            {
                                id: "c_origin",
                                name: "Origem",
                                options: origins,
                            },
                            { id: "c_class", name: "Classe", options: classes },
                        ].map((field) => (
                            <div key={field.id}>
                                <InputLabel
                                    htmlFor={field.id}
                                    value={field.name}
                                />
                                <select
                                    id={field.id}
                                    value={data[field.id]}
                                    onChange={(e) =>
                                        setData(field.id, e.target.value)
                                    }
                                    className="w-full mt-2 p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:ring focus:ring-indigo-400"
                                    required
                                >
                                    <option value="">Selecione</option>
                                    {field.options &&
                                    field.options.length > 0 ? (
                                        field.options.map((option) => (
                                            <option
                                                key={option.id}
                                                value={option.name}
                                            >
                                                {option.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Carregando...</option>
                                    )}
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                        {[
                            { name: "Força", attr: "c_str" },
                            { name: "Destreza", attr: "c_dex" },
                            { name: "Vigor", attr: "c_vig" },
                            { name: "Inteligência", attr: "c_int" },
                            { name: "Sabedoria", attr: "c_wisd" },
                            { name: "Carisma", attr: "c_char" },
                        ].map(({ attr, name }) => (
                            <div
                                key={attr}
                                className="bg-gray-800 p-4 rounded-lg shadow-md"
                            >
                                <InputLabel
                                    htmlFor={attr}
                                    value={name.toUpperCase()}
                                />
                                <TextInput
                                    id={attr}
                                    type="number"
                                    value={data[attr]}
                                    onChange={(e) =>
                                        handleChange(attr, e.target.value)
                                    }
                                    className="w-full text-center text-xl mt-2 bg-gray-700 border-none"
                                />
                                <p className="text-sm text-gray-400 mt-1">
                                    Modificador: {calculateModifier(data[attr])}
                                </p>
                            </div>
                        ))}
                        <h2 className="text-lg font-semibold text-center text-indigo-400">
                            Pontos Restantes: {remainingPoints}
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <PrimaryButton
                            type="submit"
                            className="px-6 py-3 text-lg bg-indigo-500 hover:bg-indigo-600 transition rounded-lg shadow-md"
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
