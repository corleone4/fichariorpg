import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Apagar a conta
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Uma vez que sua conta é apagada, todos os seus dados e configurações
                    serão permanentemente apagados. Antes de apagar a sua conta,
                    faça o download de todas as informações importantes que você desejar.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Apagar Conta
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Tem certeza que deseja apagar a sua conta?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        <b>Uma vez que sua conta é apagada, todos os seus dados e configurações
                        serão permanentemente apagados.</b> Porfavor, digite sua senha
                        para confirmar a exclusão <b>permanente</b> da sua conta de nossos sistemas.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Senha"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Senha"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Voltar
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Apagar Conta
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
