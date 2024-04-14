import { User } from '../types/user';
import { axiosClient } from './axiosInstance';

export const getUsers = async (page: number) => {
  const response = await axiosClient.get(`/api/v1/auth/users?page=${page}`);
  return response.data;
};

export const createUser = async (data: Omit<User, '_id'>) => {
  const response = await axiosClient.post('/api/v1/auth/user', data);
  return response.data;
};

export const updateUser = async (id: string, data: Omit<User, '_id'>) => {
  const response = await axiosClient.patch(`/api/v1/auth/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosClient.delete(`/api/v1/auth/users/${id}`);
  return response.data;
};
