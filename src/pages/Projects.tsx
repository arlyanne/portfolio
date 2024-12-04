export default function Projects() {
    const projects = [
      {
        name: "Projeto-Campeonato-Futebol",
        description: "Um sistema de gerenciamento de campeonatos de futebol.",
        url: "https://github.com/arlyanne/Projeto-Campeonato-Futebol",
        language: "Java",
        updatedAt: "Atualizado na semana passada",
      },
      {
        name: "cardapio-react",
        description:
          "Sistema de Pedidos: Aplicação que permite ao atendente registrar os pedidos dos clientes de forma rápida e eficiente, otimizando o atendimento em restaurantes.",
        url: "https://github.com/arlyanne/cardapio-react",
        language: "React",
        updatedAt: "Atualizado recentemente",
      },
      {
        name: "inventario-react-spa",
        description: "Um sistema SPA para gerenciar inventário de forma eficiente.",
        url: "#", // Insira a URL do repositório se disponível
        language: "React",
        updatedAt: "Data de atualização desconhecida",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center pt-16 px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Linguagem:</strong> {project.language}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Última atualização:</strong> {project.updatedAt}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-300"
                >
                  Ver no GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  