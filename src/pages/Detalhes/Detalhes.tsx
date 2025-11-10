import { useParams } from 'react-router-dom';

export function Detalhes() {
  const { id } = useParams();

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-sky-700">
        Página de Detalhes
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Você está a ver os detalhes do item com ID: 
        <span className="ml-2 font-bold text-sky-600 bg-sky-100 px-2 py-1 rounded">
          {id}
        </span>
      </p>
    </div>
  );
}