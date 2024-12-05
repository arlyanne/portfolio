import { motion } from 'framer-motion';
import { FaReact, FaGithub, FaVuejs, FaGitAlt, FaCogs, FaTasks } from 'react-icons/fa';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white flex items-start justify-center pt-16 px-8">
            <div className="max-w-4xl">

                <motion.h1
                    className="text-5xl font-extrabold mb-8 text-left"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Sobre Mim
                </motion.h1>
                
                <motion.p
                    className="text-lg leading-relaxed text-justify mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Olá! Meu nome é <span className="font-semibold">Maria Arlyanne</span>. Sou uma desenvolvedora web apaixonada por transformar ideias em interfaces incríveis e funcionais.
                    Com experiência em <span className="font-semibold">React</span> e <span className="font-semibold">Vue.js</span>, me especializo em criar aplicações modernas, acessíveis e responsivas que atendam às necessidades dos usuários de forma intuitiva.
                </motion.p>

                <motion.p
                    className="text-lg leading-relaxed text-justify mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Tenho um sólido conhecimento em:
                </motion.p>

                <motion.div
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaReact className="text-3xl text-blue-500" />
                        <span className="text-xl font-semibold">React - Desenvolvimento de interfaces interativas</span>
                    </div>

                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaVuejs className="text-3xl text-green-500" />
                        <span className="text-xl font-semibold">Vue.js - Criação de SPA's e aplicações dinâmicas</span>
                    </div>

                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaGithub className="text-3xl text-gray-600" />
                        <span className="text-xl font-semibold">Git - Controle de versões para colaboração eficiente</span>
                    </div>

                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaGitAlt className="text-3xl text-orange-500" />
                        <span className="text-xl font-semibold">Axios - Integração com APIs e gerenciamento de dados</span>
                    </div>

                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaCogs className="text-3xl text-yellow-500" />
                        <span className="text-xl font-semibold">TypeScript - Tipagem forte e programação robusta</span>
                    </div>

                    <div className="flex items-center space-x-4 hover:bg-gray-700 p-4 rounded-lg transition-all ease-in-out duration-200 cursor-pointer hover:scale-105 transform">
                        <FaTasks className="text-3xl text-purple-500" />
                        <span className="text-xl font-semibold">Kanban - Metodologia ágil para gerenciamento de tarefas</span>
                    </div>
                </motion.div>

                <motion.p
                    className="text-lg leading-relaxed text-justify"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Este portfólio é uma demonstração do meu trabalho e da minha dedicação ao aprendizado contínuo. Estou sempre em busca de aprimorar minhas habilidades e entregar soluções de qualidade que realmente façam a diferença.
                </motion.p>
            </div>
        </div>
    );
}
