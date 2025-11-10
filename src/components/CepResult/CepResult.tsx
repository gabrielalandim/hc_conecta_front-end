import type { ViaCepData } from '../../types/viaCep'; 


export default function CepResult({ data }: { data: ViaCepData }) {
  return (
    <div className="bg-slate-50 p-4 rounded shadow-inner mt-4">
      <h4 className="font-semibold text-sky-700 text-lg">Resultado</h4>
      <ul className="mt-2 text-sm text-gray-700 space-y-1">
        <li><strong>CEP:</strong> {data.cep}</li>
        <li><strong>Logradouro:</strong> {data.logradouro || '-'}</li>
        <li><strong>Complemento:</strong> {data.complemento || '-'}</li>
        <li><strong>Bairro:</strong> {data.bairro || '-'}</li>
        <li><strong>Cidade:</strong> {data.localidade || '-'}</li>
        <li><strong>UF:</strong> {data.uf || '-'}</li>
      </ul>
    </div>
  );
}