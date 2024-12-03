import AnimatedCard from "../components/AnimatedCard";
import ProjectCard from "../components/AnimatedCard";

type Project = {
    title: string;
    description: string;
}

export default function Projects() {

    const projects: Project[] = [
        { title: 'Projeto 1', description: 'Descrição do projeto 1' },
        { title: 'Projeto 2', description: 'Descrição do projeto 2' },
      ];

    return(
        <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <AnimatedCard key={index} {...project} />
          ))}
        </div>
      </div>
    )
}
      
        