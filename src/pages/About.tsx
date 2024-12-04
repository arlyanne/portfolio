

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center pt-16 px-8">
            <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-8 text-left">Sobre Mim</h1>
                <p className="text-lg leading-relaxed text-justify mb-8">
                    Olá! Meu nome é <span className="font-semibold">Maria Arlyanne</span>. Sou uma desenvolvedora web apaixonada por transformar ideias em interfaces incríveis e funcionais.  
                    Com experiência em <span className="font-semibold">React</span> e <span className="font-semibold">Vue.js</span>, me especializo em criar aplicações modernas, acessíveis e responsivas que atendam às necessidades dos usuários de forma intuitiva.  
                </p>
                <p className="text-lg leading-relaxed text-justify mb-8">
                    Tenho um sólido conhecimento em:
                </p>
                <ul className="list-disc list-inside text-left space-y-4 mb-8">
                    <li>Manipulação de estado global e integração de APIs com <span className="font-semibold">Axios</span>.</li>
                    <li>Desenvolvimento de interfaces com bibliotecas como <span className="font-semibold">Vuetify</span> e <span className="font-semibold">Chakra UI</span>.</li>
                    <li>Programação com <span className="font-semibold">TypeScript</span> e controle de versões com <span className="font-semibold">Git</span>.</li>
                    <li>Testes de aplicações, geração de builds e publicação em plataformas.</li>
                    <li>Trabalho colaborativo seguindo metodologias ágeis, como <span className="font-semibold">Kanban</span>.</li>
                </ul>
                <p className="text-lg leading-relaxed text-justify">
                    Este portfólio é uma demonstração do meu trabalho e da minha dedicação ao aprendizado contínuo. Estou sempre em busca de aprimorar minhas habilidades e entregar soluções de qualidade que realmente façam a diferença.
                </p>
            </div>
        </div>
        
    );
}
