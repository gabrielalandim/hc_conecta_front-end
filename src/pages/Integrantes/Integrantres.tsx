import { FaLinkedin, FaGithub } from 'react-icons/fa';

import fotoSamara from '../../assets/Image (3).jpg';
import fotoEduarda from '../../assets/duda.jfif';
import fotoGabi from '../../assets/gabi.jfif';

function IntegranteCard({ nome, fotoUrl, linkedin, github }: { nome: string, fotoUrl: string, linkedin: string, github: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img 
        src={fotoUrl} 
        alt={`Foto de ${nome}`} 
        className="w-40 h-40 rounded-full mx-auto mb-4 bg-gray-300 object-cover" 
      />
      <h3 className="text-2xl font-bold text-sky-700 mb-4">{nome}</h3>
      <div className="flex justify-center gap-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="bg-sky-600 text-white p-3 rounded-lg flex items-center gap-2 hover:bg-sky-700">
          <FaLinkedin /> LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-lg flex items-center gap-2 hover:bg-gray-700">
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}

export function Integrantes() {
  return (
    <div className="p-4 md:p-8 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-700 mb-4 text-center">
          Quem Somos?
        </h1>
        
        <div className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p>
            Somos uma equipe formada por três estudantes de Tecnologia da Informação: 
            <strong> Eduarda Weiss (21 anos), Samara (19 anos) e Maria Gabriela (18 anos)</strong>,
            atualmente cursando o primeiro semestre da graduação.
          </p>
          <p>
            Unidas pelo interesse em <strong>aprender e crescer profissionalmente</strong>, 
            acreditamos na força da colaboração como base para o desenvolvimento de soluções relevantes e humanas.
          </p>
          <p>
            Eduarda e Maria Gabriela demonstram grande afinidade com a <strong>linguagem Java</strong>, 
            enquanto Samara se destaca por seu entusiasmo com o <strong>front-end e sua paixão</strong> por <strong>bancos de dados</strong>. 
            Todas participaram ativamente de cada etapa deste projeto, contribuindo com seus conhecimentos e aprendendo mutuamente ao longo do processo.
          </p>
          <p>
            Nosso principal objetivo é aplicar a tecnologia como ferramenta de <strong>transformação</strong> no setor da saúde. 
            Somos uma equipe apaixonada por inovação, trabalhando para tornar o acesso ao cuidado mais simples, eficiente e humano. 
            No contexto do Hospital das Clínicas, unimos <strong>tecnologia e design</strong> para criar experiências significativas 
            e que realmente fazem a <strong>diferença na vida</strong> das pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <IntegranteCard 
            nome="Samara Porto Souza"
            fotoUrl={fotoSamara}
            linkedin="https://www.linkedin.com/in/samara-porto-732723325"
            github="https://github.com/ssamaraps"
          />
          <IntegranteCard 
            nome="Eduarda Weiss Ventura"
            fotoUrl={fotoEduarda}
            linkedin="https://www.linkedin.com/in/eduarda-weiss-ventura-55bb37268"
            github="https://github.com/eduardawv"
          />
          <IntegranteCard 
            nome="Maria Gabriela Landim Severo"
            fotoUrl={fotoGabi}
            linkedin="https://www.linkedin.com/in/maria-gabriela-landim-595654322/"
            github="https://github.com/gabrielalandim"
          />
        </div>
      </div>
    </div>
  );
}