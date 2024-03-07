// src/apiService.ts
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

interface AuthResponse {
  token: string;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserData {
  data: User;
}

interface UsersData {
  data: User[];
}
interface SignUpData {
  email: string;
  password: string;
}

interface SignUpResponse {
  success: boolean;
  message?: string;
}

export const apiService = {
  signUp: async (userData: SignUpData): Promise<SignUpResponse> => {
    try {
      // Simulate sign-up by sending a POST request to the backend
      const response = await axios.post(`${BASE_URL}/register`, userData);

      // Assume the backend returns success and a message
      return { success: true, message: 'Sign-up successful!' };
    } catch (error : any) {
      // If an error occurs, return failure and an error message
      return { success: false, message: error.response?.data?.message || 'Sign-up failed' };
    }
  },
  // Authentication: Login
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data as AuthResponse;
  },

  // Data Retrieval: Get User by ID
  getUserById: async (id: number): Promise<UserData> => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  },

  // Data Retrieval: Get List of Users
  getUsers: async (): Promise<UsersData> => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  },
};
