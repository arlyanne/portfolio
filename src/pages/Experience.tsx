import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-center pt-16 px-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12">
          Minhas Experiências
        </h2>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-teal-300 mb-4">704 Apps</h3>
          <p className="text-xl text-gray-300 mb-4">
            <strong>Estagiária</strong> | Agosto 2024 - Presente
          </p>
          <p className="text-lg text-gray-300">
            Na 704 Apps, minha principal responsabilidade foi testar aplicações
            mobile, realizando testes de funcionalidade e usabilidade para
            garantir que os aplicativos estivessem funcionando corretamente
            antes do lançamento. Além disso, fui responsável pela geração de
            APKs e pela publicação dos aplicativos nas lojas de aplicativos,
            garantindo que o processo de distribuição fosse suave e eficiente.
            Também participei de ajustes de código para corrigir problemas
            identificados durante os testes, o que me proporcionou uma
            experiência prática importante para o desenvolvimento de aplicativos
            móveis.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-teal-300 mb-4">
            ADA Software & Tecnologia
          </h3>
          <p className="text-xl text-gray-300 mb-4">
            <strong>Desenvolvimento Frontend - Freelancer</strong> | Jan 2024 –
            Presente
          </p>
          <p className="text-lg text-gray-300">
            Como freelancer na ADA Software & Tecnologia, atuei no
            desenvolvimento de projetos utilizando React, onde fui responsável
            por criar interfaces dinâmicas e interativas. Uma das principais
            tarefas foi a implementação de APIs utilizando Axios, garantindo uma
            comunicação eficiente entre o frontend e o backend. Durante esse
            trabalho, usei a biblioteca Chakra UI para criar componentes
            reutilizáveis e visualmente agradáveis. A organização de código foi
            realizada no GitHub, e sempre trabalhei com o modelo ágil Kaban para
            garantir entregas rápidas e consistentes. Esse projeto foi focado em
            um sistema de gestão de estoque, onde ajudei a melhorar a interface
            e a experiência do usuário com uma abordagem moderna e otimizada.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-teal-300 mb-4">
            ARCE - Public Services Regulation Agency, CE - Brazil
          </h3>
          <p className="text-xl text-gray-300 mb-4">
            <strong>Estagiária em Desenvolvimento Frontend</strong> | Dez 2023 -
            Ago 2024
          </p>
          <p className="text-lg text-gray-300">
            Durante minha experiência na ARCE, trabalhei principalmente com
            Vue.js, onde fui responsável pelo desenvolvimento de várias
            funcionalidades utilizando essa biblioteca. Para gerenciar o estado
            global da aplicação, utilizei o Vuex, que foi essencial para
            garantir a consistência dos dados ao longo da aplicação. Também
            participei da manutenção de sistemas legados e implementei APIs
            utilizando Axios Observable para integração de dados de forma
            eficiente. O desenvolvimento foi feito em TypeScript, o que me
            proporcionou uma experiência mais robusta em termos de tipagem e
            organização do código. Em termos de organização do trabalho,
            seguimos o modelo ágil Kaban, que me ajudou a gerenciar melhor as
            entregas e prazos. Utilizamos também a biblioteca Vuetify para
            aprimorar o design da interface, garantindo uma aparência moderna e
            responsiva.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
