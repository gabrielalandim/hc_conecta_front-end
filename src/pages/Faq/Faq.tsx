import { Link } from 'react-router-dom';

function FaqItem({ question, children }: { question: string, children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-sky-700 mb-2">{question}</h3>
      <div className="text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="p-4 md:p-8 bg-slate-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">
          Perguntas Frequentes
        </h1>

        <FaqItem question="Como me posicionar na câmera para a teleconsulta?">
          <p>Siga estas instruções para garantir a melhor qualidade:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Rosto:</strong> Foque seu rosto no centro da tela, mantendo a câmera na altura dos olhos.</li>
            <li><strong>Iluminação:</strong> Ajuste para uma luz frontal ou natural, evitando sombras.</li>
            <li><strong>Distância:</strong> Mantenha cerca de 50 cm da câmera.</li>
            <li><strong>Fundo:</strong> Evite fundos com muita distração ou contra a luz (janelas).</li>
          </ul>
          <button className="mt-4 bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-500">
            Testar minha câmera
          </button>
        </FaqItem>

        <FaqItem question="Como confirmo minha presença na consulta?">
          <p>Você receberá um lembrete por SMS e/ou E-mail 48 horas antes da consulta. Basta clicar no botão **"Confirmar Presença"** que estará na mensagem. Você também pode confirmar pela tela "Próximas Consultas" aqui no portal.</p>
        </FaqItem>

        <FaqItem question="O que fazer se não consigo acionar meu áudio ou câmera?">
          <p>Primeiro, verifique se o seu navegador (Chrome, Firefox) tem permissão para usar a câmera e o microfone. Geralmente, uma janela aparece no topo pedindo sua permissão. Se não funcionar, tente reiniciar o navegador ou o computador.</p>
        </FaqItem>
        
        <FaqItem question="Posso mudar meu horário de consulta?">
          <p>Para reagendamentos, você deve clicar em **"Cancelar"** na tela "Próximas Consultas" e, em seguida, entrar em contato com a Central de Atendimento para marcar um novo horário.</p>
        </FaqItem>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Não encontrou sua dúvida?</h2>
          <Link 
            to="/contato"
            className="bg-sky-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-sky-700"
          >
            Envie sua dúvida
          </Link>
        </div>
      </div>
    </div>
  );
}