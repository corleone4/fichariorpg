import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { motion } from "motion/react";
import { Button } from "@headlessui/react";
import GuestNavbar from "@/Components/Guest/GuestNavbar";
import DropdownProfile from "@/Components/DropdownProfile";
import { Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <GuestNavbar>
                {auth.user ? (
                    <>
                        <DropdownProfile />
                        <Link
                            href={route("dashboard")}
                            className="px-3 py-2 text-white hover:text-gray-300"
                        >
                            Dashboard
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="px-3 py-2 text-white hover:text-gray-300"
                        >
                            Entrar
                        </Link>
                        <Link
                            href={route("register")}
                            className="px-3 py-2 text-white hover:text-gray-300"
                        >
                            Registrar
                        </Link>
                    </>
                )}
            </GuestNavbar>
            <div className="bg-slate-950 min-h-screen">
                <div className="w-full">
                    <div className="w-full h-[100vh] flex bg-black gap-2">
                        <div className="flex flex-col justify-start items-center w-[50vw]">
                            <div className="flex flex-col justify-end py-2 h-1/2 items-center">
                                <h2 className="text-white w-2/3 text-start text-6xl font-extrabold">
                                    Criador de fichas de personagens para RPG de
                                    mesa.
                                </h2>
                            </div>
                            <div className="flex flex-col justify-start w-full h-1/2 items-center">
                                <h2 className="text-gray-300 w-2/3 py-6 text-2xl font-regular">
                                    Um criador de fichas inteligente para
                                    otimizar a sua experiência!
                                </h2>

                                <Button></Button>
                            </div>
                        </div>
                        <div className="px-20 py-10 w-[50vw]">
                            <h2 className="text-white text-5xl font-extrabold">
                                <motion.div
                                    animate={{
                                        y: [0, 20, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img src={"./img/rpg-vector.png"} />
                                </motion.div>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <section className="text-center py-24" data-aos="zoom-in">
                        <h2 className="text-4xl font-extrabold text-gray-200 mb-8">
                            Este é um site com o propósito de ser um criador de
                            fichas
                        </h2>
                        <p className="text-lg text-gray-500 mb-12">
                            De forma mais automática e simplificada, aumentando
                            a praticidade
                        </p>

                        {/* Feature Cards */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Cálculos já feitos automaticamente
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Com este site, todas as informações que
                                    necessitam de um cálculo já serão feitas
                                    automaticamente com o preenchimento de
                                    certas áreas da ficha.
                                </p>
                            </div>

                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Possibilidade de atualizações
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Caso ocorram atualizações no sistema, aqui
                                    também será atualizado, sem a necessidade de
                                    ter que preencher outra ficha manualmente
                                </p>
                            </div>

                            <div className="cursor-pointer max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Sem custos
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    É totalmente acessível e grátis para uso. É
                                    um projeto feito para auxiliar na mesa,
                                    apenas peço para que considerem usá-lo :D
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
}
