import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Teste() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Essa página é um teste apenas para descobrir se a rota está funcionando
                </h2>
            }
        >
            <Head title="Sim!" />

           
        </AuthenticatedLayout>
    );
}
