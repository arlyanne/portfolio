import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importação do motion

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white flex items-center justify-center pt-16 px-8">
      <div className="w-full max-w-4xl">
        {/* Card com estilo de "Projects" */}
        <motion.div
          className="bg-gray-800 p-12 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-300">
            Formas de me encontrar
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Você pode me encontrar nas seguintes plataformas ou entrar em contato diretamente:
          </p>

          <div className="space-y-12">
            {/* LinkedIn */}
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/arlyanne-lima-87b75b6b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="mr-3 text-4xl" />
                LinkedIn
              </a>
            </div>

            {/* GitHub */}
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://github.com/arlyanne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-2xl text-gray-300 hover:text-gray-500 transition-colors duration-300"
              >
                <FaGithub className="mr-3 text-4xl" />
                GitHub
              </a>
            </div>

            {/* Email and Phone */}
            <div className="mt-12 text-center">
              <p className="text-2xl text-gray-300 mb-6">
                <strong>E-mail:</strong>{' '}
                <a href="mailto:arlyanne.lima.ferro@gmail.com" className="text-blue-500 hover:text-blue-700">
                  arlyanne.lima.ferro@gmail.com
                </a>
              </p>
              <p className="text-2xl text-gray-300">
                <strong>Telefone:</strong>{' '}
                <a href="tel:+558598369694" className="text-blue-500 hover:text-blue-700">
                  85-9-9836-6994
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
