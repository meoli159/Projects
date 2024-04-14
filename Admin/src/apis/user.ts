import { axiosClient } from './axiosInstance';

type LoginDTO = {
  email: string;
  password: string;
};

type RegisterDTO = LoginDTO & {
  username: string;
  roles?: string[];
  address?: string;
  phone?: number;
};
export const login = async (data: LoginDTO) => {
  const response = await axiosClient.post('/api/v1/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterDTO) => {
  const response = await axiosClient.post('/api/v1/auth/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.post('/api/v1/auth/logout');
  return response.data;
};
