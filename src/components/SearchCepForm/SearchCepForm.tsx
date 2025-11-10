import React, { useState } from 'react';
import { useCepSearch } from '../../hooks/useCepSearch'; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import CepResult from '../CepResult/CepResult';

export default function SearchCepForm() {
  const [cepInput, setCepInput] = useState('');
  const { data, loading, error, fetchCep } = useCepSearch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleaned = cepInput.replace(/\D/g, ''); 
    fetchCep(cleaned);
  }

  return (
    <div className="bg-white p-6 rounded shadow-md mt-6">
      <h3 className="font-semibold text-lg text-sky-700">Buscar endereço por CEP</h3>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col sm:flex-row gap-2">
        <input
          aria-label="CEP"
          value={cepInput}
          onChange={(e) => setCepInput(e.target.value)}
          placeholder="Ex: 01001000"
          className="p-2 border rounded w-full sm:w-64"
        />
        <button 
          className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

  
      {loading && <LoadingSpinner />}
      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      {data && <CepResult data={data} />}
    </div>
  );
}