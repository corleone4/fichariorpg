import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-12 sm:py-8 text-white">
            <div className="container mx-auto px-0 py-8 flex flex-col items-center justify-center">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center">
                    <div>
                        <h2 className="text-xl font-bold mb-3">Sobre</h2>
                        <p className="text-gray-400">
                            Projeto feito por Luan Henrique (Corleone)
                        </p>
                    </div>

                    <div className="py-8 lg:py-0">
                        <h2 className="text-xl font-bold mb-3">
                            Me mande um email!
                        </h2>
                        <p className="text-gray-400">
                            Email: lluann930@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3">
                            Redes Sociais
                        </h2>
                        <div className="flex flex-col gap-4 lg:gap-2 lg:px-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-gray-400 pr-2 hover:text-white text-xl"
                                />
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-gray-400 pr-2 hover:text-white text-xl"
                                />
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-gray-400 pr-2 hover:text-white text-xl"
                                />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center max-w-8xl text-gray-400 border-t border-gray-700 pt-3">
                © 2025 Corleone. Todos os direitos reservados.
            </div>
        </footer>
    );
}
