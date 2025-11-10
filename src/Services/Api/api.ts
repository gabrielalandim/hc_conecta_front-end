const BASE_URL = 'http://localhost:8080';

export interface LoginResponse {
  id_usuario: number;
  ds_login: string;
  ds_tipo_usuario: string;
}

export interface AgendamentoJava {
  id_agendamento: number;
  dt_agendamento: string;
  st_agendamento: string;
}

export const apiLogin = async (login: string, senha: string): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ds_login: login, ds_senha: senha }),
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(errorMsg || 'Usuário ou Senha inválidos');
  }
  return response.json();
};

export const getAgendamentos = async (): Promise<AgendamentoJava[]> => {
  const response = await fetch(`${BASE_URL}/agendamento`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar agendamentos do servidor.');
  }
  return response.json();
};