// src/SignInPage.tsx
import React, { useState } from 'react';
import { apiService } from './apiService'; // Import the apiService
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from './counterSlice';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      // Call the login function from the apiService
      const response = await apiService.login(email, password);

      // Store the token or perform other actions on successful login
      console.log('Login successful. Token:', response.token);

      // Redirect to the dashboard or other pages
      dispatch(setAuth(true));
      navigate('/dashboard');
    } catch (error : any) {
      console.error('Login failed:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
  
  <label className="block mb-2">
    Email:
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </label>
  
  <label className="block mb-4">
    Password:
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </label>
  
  <button
    onClick={handleSignIn}
    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    Sign In
  </button>
</div>

  );
};

export default SignInPage;
