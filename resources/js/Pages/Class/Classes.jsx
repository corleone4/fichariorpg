import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Classes() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        modifiers: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("classes.create"), {
            onFinish: () => reset(),
        });
    };
    return (
        <AuthenticatedLayout>
            <div>
                <form onSubmit={submit} className="w-full">
                    <InputLabel htmlFor="name" value="Nome da classe" />
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                        required
                        className="mt-1 w-full"
                    />
                    <InputLabel htmlFor="description" value="Descrição da classe" />
                    <TextInput
                        id="description"
                        name="description"
                        type="text"
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                        required
                        className="mt-1 w-full"
                    />
                    <InputLabel htmlFor="modifiers" value="Modificadores de atributo da classe" />
                    <TextInput
                        id="modifiers"
                        name="modifiers"
                        type="text"
                        value={data.modifiers}
                        onChange={(e) =>
                            setData("modifiers", e.target.value)
                        }
                        required
                        className="mt-1 w-full"
                    />
                    <div className="flex justify-center mt-6">
                        <PrimaryButton
                            type="submit"
                            className="w-full md:w-auto"
                            disabled={processing}
                        >
                            Criar Classe
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
