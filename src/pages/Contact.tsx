import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaGitlab } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-center pt-16 px-8">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-center mb-12 text-purple-300">
            Formas de me encontrar
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Você pode me encontrar nas seguintes plataformas ou entrar em
            contato diretamente:
          </p>

          <div className="space-y-12">
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

            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://github.com/arlyanne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-2xl text-blue-500  hover:text-gray-500 transition-colors duration-300"
              >
                <FaGithub className="mr-3 text-4xl" />
                GitHub
              </a>
            </div>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://gitlab.com/arlyanne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-2xl text-blue-500  hover:text-gray-500 transition-colors duration-300"
              >
                <FaGitlab className="mr-3 text-4xl" />
                GitLab
              </a>
            </div>
            <div className="flex justify-center items-center text-2xl space-x-6 text-blue-500  hover:text-gray-500 transition-colors duration-300">
              <FaEnvelope className="mr-2" />
              arlyanne.lima.ferro@gmail.com
            </div>
            <div className="flex justify-center items-center text-2xl space-x-6 text-blue-500  hover:text-gray-500 transition-colors duration-300">
              <a
                href="https://wa.me/5585998366994?text=Ol%C3%A1,%20Maria%20Arlyanne!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-2xl text-blue-500  hover:text-gray-500 transition-colors duration-300"
              >
                <FaWhatsapp className="mr-2" />
                (85) 9-9836-6994
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
