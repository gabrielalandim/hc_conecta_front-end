import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../../Services/Api/api'; 

type FormInputs = {
  login: string;
  senha: string;
};

export function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoginError(''); 

    try {
      const responseData = await apiLogin(data.login, data.senha);

      console.log('Login com sucesso!', responseData);

      localStorage.setItem('user_id', responseData.id_usuario.toString());
      localStorage.setItem('user_login', responseData.ds_login);
      localStorage.setItem('user_tipo', responseData.ds_tipo_usuario);

      navigate('/consultas'); 

    } catch (error: any) {
      console.error('Falha no login:', error);
      setLoginError(error.message || 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-slate-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">
          Faça Login na Sua Conta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label htmlFor="login" className="block text-lg font-medium text-gray-700">
              Email ou Usuário
            </label>
            <input
              id="login"
              type="text"
              placeholder="Digite seu email ou usuário"
              className="mt-1 block w-full text-lg p-3 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              {...register('login', { 
                required: 'O Email ou Usuário é obrigatório'
              })}
            />
            {errors.login && (
              <p className="mt-1 text-sm text-red-600">{errors.login.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senha" className="block text-lg font-medium text-gray-700">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              className="mt-1 block w-full text-lg p-3 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              {...register('senha', { required: 'A senha é obrigatória' })}
            />
            {errors.senha && (
              <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
            )}
          </div>

          {loginError && (
            <div className="p-3 text-center rounded-md bg-red-100 text-red-700">
              {loginError}
            </div>
          )}

          <div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-lg shadow-sm text-white text-lg font-semibold bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
        
        <p className="text-center mt-6 text-gray-600">
          Esqueceu sua senha?{' '}
          <a href="#" className="font-medium text-sky-600 hover:underline">
            Clique aqui!
          </a>
        </p>

      </div>
    </div>
  );
}