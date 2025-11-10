import { Link } from 'react-router-dom';
import { type ReactNode, useEffect } from 'react';
import { FaCalendarAlt, FaQuestionCircle, FaUsers, FaComments } from 'react-icons/fa'; 

interface HomeCardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
  colorClass: string;
}

function HomeCard({ title, description, link, icon, colorClass }: HomeCardProps) {
  return (
    <Link 
      to={link} 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col text-left"
    >
      <div className={`${colorClass} mb-3`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 grow mb-4">{description}</p>
      <span className={`${colorClass} font-semibold`}>
        Acessar agora &rarr;
      </span>
    </Link>
  );
}

export function Home() {
  const nomeUsuario = localStorage.getItem('user_login') || 'Paciente';

  useEffect(() => {
    document.title = 'HC Conecta | Portal';
  }, []);

  return (
    <div className="bg-slate-100 pb-12">
      
      <div className="bg-sky-700 text-white p-10 md:p-16">
         <div className="max-w-6xl mx-auto">
           <h1 className="text-5xl font-bold">Saúde Digital</h1>
           <p className="text-2xl mt-2 opacity-90">Bem-vindo(a), {nomeUsuario}!</p>
         </div>
      </div>

      <div className="p-4 md:p-8 max-w-6xl mx-auto -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <HomeCard
            title="Próximas Consultas"
            description="Ver e gerenciar seus agendamentos."
            link="/consultas"
            icon={<FaCalendarAlt size={40} />}
            colorClass="text-teal-500" 
          />
          <HomeCard
            title="Perguntas Frequentes"
            description="Tire suas dúvidas sobre teleconsultas."
            link="/faq"
            icon={<FaQuestionCircle size={40} />}
            colorClass="text-sky-600"
          />
          <HomeCard
            title="Fale Conosco"
            description="Envie sua dúvida, sugestão ou avaliação."
            link="/contato"
            icon={<FaComments size={40} />}
            colorClass="text-amber-500"
          />
          <HomeCard
            title="Nossa Equipe"
            description="Conheça quem está por trás do projeto."
            link="/integrantes"
            icon={<FaUsers size={40} />}
            colorClass="text-gray-700"
          />

        </div>
      </div>

      <div className="p-4 md:p-8 max-w-6xl mx-auto mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dúvidas Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/faq" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg text-sky-700 mb-2">Como entrar na Teleconsulta?</h4>
            <p className="text-gray-600 text-sm">Passo a passo para não ter erro na hora de conectar...</p>
          </Link>
          <Link to="/faq" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg text-sky-700 mb-2">Como me posicionar na câmera?</h4>
            <p className="text-gray-600 text-sm">Dicas de iluminação, distância e enquadramento...</p>
          </Link>
           <Link to="/faq" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg text-sky-700 mb-2">Como confirmo minha presença?</h4>
            <p className="text-gray-600 text-sm">Veja como é fácil confirmar sua consulta pelo portal...</p>
          </Link>
        </div>
      </div>

    </div>
  );
}