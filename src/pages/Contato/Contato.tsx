import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SearchCepForm from '../../components/SearchCepForm/SearchCepForm';

type FormInputs = {
  nome: string;
  email: string;
  mensagem: string;
};

export function Contato() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Dados do formulário de contato:", data);
    setIsSuccess(true);
  };

  return (
    <div className="p-4 md:p-8 bg-slate-100"> 
      <div className="max-w-lg mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-sky-700">Fale Conosco</h1>

          {isSuccess ? (
            <div className="p-4 rounded-md bg-green-100 text-green-800">
              Mensagem enviada com sucesso! Obrigado pelo contato.
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  {...register('nome', { required: 'O nome é obrigatório' })}
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  {...register('email', { 
                    required: 'O email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Endereço de email inválido'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  {...register('mensagem', { required: 'A mensagem é obrigatória' })}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>
                )}
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full py-2 px-4 rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          )}
        </div>

        <SearchCepForm />

      </div>
    </div>
  );
}