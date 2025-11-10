import { useState } from 'react';
import type { ViaCepData } from '../types/viaCep';

export function useCepSearch() {
  const [data, setData] = useState<ViaCepData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCep = async (cep: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.ok) {
        throw new Error('Erro na rede ao buscar o CEP.');
      }
      
      const result = await response.json();

      if (result.erro) {
        throw new Error('CEP não encontrado ou inválido.');
      }
      
      setData(result);

    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchCep };
}