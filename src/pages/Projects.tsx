import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Projeto-Campeonato-Futebol",
      description:
        "Projeto desenvolvido como parte de um trabalho acadêmico solicitado pela faculdade. O sistema simula um campeonato de futebol, permitindo o gerenciamento de equipes, partidas e resultados de forma prática e organizada. Essa aplicação foi projetada para consolidar conhecimentos adquiridos em sala de aula e aplicar boas práticas de desenvolvimento de software.",
      url: "https://github.com/arlyanne/Projeto-Campeonato-Futebol",
      language: "Java",
      updatedAt: "Atualizado na semana passada",
    },
    {
      name: "cardapio-react",
      description:
        "Sistema de Pedidos: Uma aplicação desenvolvida para simplificar e agilizar o registro de pedidos em restaurantes. Voltada especialmente para pequenos empreendedores do setor de alimentação, a solução busca eliminar burocracias e otimizar o atendimento ao cliente, permitindo que os atendentes registrem os pedidos de forma rápida, prática e eficiente. O objetivo principal é tornar o gerenciamento mais acessível e funcional para negócios que valorizam a simplicidade no dia a dia.",
      url: "https://github.com/arlyanne/cardapio-react",
      language: "React",
      updatedAt: "Atualizado recentemente",
    },
    {
      name: "inventario-react-spa",
      description:
        "Sistema SPA para gerenciamento de inventário: Uma aplicação moderna e eficiente que permite controlar e organizar estoques com facilidade. Desenvolvida para otimizar processos, oferece uma interface intuitiva e funcionalidades práticas, garantindo uma gestão de inventário mais ágil e precisa.",
      url: "#",
      language: "React",
      updatedAt: "Em desenvolvimento",
    },
    {
      name: "teste-focal-point",
      description:
        "Um projeto desenvolvido com o objetivo de criar uma aplicação onde os usuários pudessem planejar e gerenciar atividades diversas. A aplicação permite a criação de tarefas, o acompanhamento de seu progresso e o encerramento após a conclusão. Este projeto foi concebido como uma oportunidade para demonstrar habilidades em CSS, com foco na implementação de estilos específicos e na atenção aos detalhes, atendendo às exigências de design estabelecidas.",
      url: "https://github.com/arlyanne/teste-focal-point",
      language: "Next",
      updatedAt: "Atualizado na semana passada",
    },
    {
      name: "Projeto-LocadoraDigital",
      description:
        "O projeto Locadora Digital é uma plataforma inovadora desenvolvida com o propósito de promover o acesso à leitura em comunidades carentes. Este sistema foi projetado para oferecer uma solução acessível, onde os usuários podem criar contas, acessar uma vasta coleção de livros digitais e desfrutar da leitura diretamente na plataforma, sem a necessidade de adquiri-los fisicamente.",
      url: "https://github.com/arlyanne/Projeto-LocadoraDigital",
      language: "React",
      updatedAt: "Atualizado na semana passada",
    },
    {
      name: "Projeto-Portfolio",
      description:
        "Um portfólio pessoal desenvolvido com o objetivo de demonstrar habilidades em desenvolvimento web. O site possui uma interface interativa e visualmente agradável, apresentando projetos, habilidades e informações sobre o desenvolvedor.",
      url: "https://github.com/arlyanne/Projeto-Portfolio",
      language: "React",
      updatedAt: "Em desenvolvimento",
    },
  ];

  return (
<div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-center pt-16 px-8">
<div className="max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Linguagem:</strong> {project.language}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Última atualização:</strong> {project.updatedAt}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                Ver no GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
