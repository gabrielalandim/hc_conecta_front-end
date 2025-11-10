import { useState, useEffect } from 'react';
import { FaRegBell, FaTimes, FaCheck, FaAngleDown } from 'react-icons/fa';

// 1. Definição de Tipos para os Dados SIMULADOS
interface Consulta {
  id: number;
  data: string;
  hora: string;
  profissional: string;
  especialidade: string;
  status: 'Pendente' | 'Confirmada' | 'Cancelada';
}

// 2. Dados Fictícios Ricos (Baseados no Protótipo)
const DADOS_SIMULADOS: Consulta[] = [
  { id: 101, data: '30/04', hora: '14h00', profissional: 'Dr. João Silva', especialidade: 'Dermatologista', status: 'Pendente' },
  { id: 102, data: '15/05', hora: '10h30', profissional: 'Dra. Ana Lima', especialidade: 'Ortopedista', status: 'Confirmada' },
];

export function Consultas() {
  const [agendamentos, setAgendamentos] = useState<Consulta[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const nomeUsuario = localStorage.getItem('user_login') || 'Paciente';

  // 3. Simulação da Busca de Dados (useEffect)
  useEffect(() => {
    document.title = 'HC Conecta | Consultas';
    // Simula o carregamento da API com 1 segundo de atraso
    setTimeout(() => {
      setAgendamentos(DADOS_SIMULADOS);
      setIsLoading(false);
    }, 1000);
  }, []);

  // 4. Funções de Ação (Ainda Locais)
  const handleAcao = (id: number, acao: string) => {
    alert(`Ação: ${acao} na consulta ID ${id}`);
    // No futuro, aqui você fará a chamada PUT ou DELETE real
  };

  if (isLoading) {
    return <div className="p-8 text-center text-xl text-sky-700">Carregando painel de consultas...</div>
  }

  return (
    <div className="p-4 md:p-8 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-700 mb-8">
          Próximas Consultas de {nomeUsuario}
        </h1>

        {/* 5. Lista de Próximas Consultas (Baseado em image_e146d2.jpg) */}
        <section className="space-y-6">
          {agendamentos.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
              
              {/* Detalhes da Consulta */}
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-800">
                  {c.data} às {c.hora}
                </h2>
                <p className="text-lg text-gray-600 mt-1">
                  {c.profissional} - {c.especialidade}
                </p>
                {c.status === 'Confirmada' && (
                    <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full mt-2 inline-block">
                        PRESENÇA CONFIRMADA
                    </span>
                )}
              </div>
              
              {/* Botões de Ação */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => handleAcao(c.id, 'Confirmar')}
                  className="py-2 px-4 rounded-lg text-white font-semibold flex items-center gap-2 bg-teal-400 hover:bg-teal-500 disabled:opacity-50"
                  disabled={c.status === 'Confirmada'}
                >
                  <FaCheck /> Confirmar Presença
                </button>
                
                <button 
                  onClick={() => handleAcao(c.id, 'Cancelar')}
                  className="py-2 px-4 rounded-lg text-white font-semibold flex items-center gap-2 bg-amber-500 hover:bg-amber-600"
                >
                  <FaTimes /> Cancelar
                </button>

                <button 
                  onClick={() => handleAcao(c.id, 'Lembrete')}
                  className="py-2 px-4 rounded-lg text-white font-semibold flex items-center gap-2 bg-sky-600 hover:bg-sky-700"
                >
                  <FaRegBell /> Adicionar Lembrete
                </button>
              </div>

            </div>
          ))}
        </section>

        {/* 6. Lista de Espera (Baseado em image_e146d2.jpg) */}
        <section className="mt-12 bg-sky-700 text-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Lista de Espera</h2>
          <p className="text-lg mb-4">
            Seja notificado sobre horários vagos e escolha entre manhã, tarde e noite!
          </p>
          <button 
            onClick={() => alert("Acessando detalhes sobre pontos...")}
            className="py-2 px-6 rounded-lg font-bold flex items-center gap-2 bg-white text-sky-700 hover:bg-gray-200"
          >
            O que são pontos? <FaAngleDown />
          </button>
        </section>
        
        {/* 7. Seus Pontos (Baseado em image_e146d2.jpg) */}
        <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Seus Pontos</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <p className="text-4xl font-extrabold text-sky-700 text-center mb-4">150 Pontos</p>
                <button 
                    onClick={() => alert("Acessando detalhes sobre pontos...")}
                    className="w-full py-2 px-6 rounded-lg font-bold flex justify-center items-center gap-2 bg-sky-700 text-white hover:bg-sky-800"
                >
                    O que são pontos?
                </button>
            </div>
        </section>

      </div>
    </div>
  );
}