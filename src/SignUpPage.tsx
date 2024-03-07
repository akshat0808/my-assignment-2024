// src/SignUpPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from './apiService';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await apiService.signUp({ email, password });

      if (response.success) {
        // Handle successful sign-up, e.g., show success message, redirect to sign-in page
        console.log('User signed up successfully');
        navigate('/signin'); // Redirect to the sign-in page
      } else {
        // Handle sign-up failure, e.g., display error message to the user
        setError(response.message || 'Sign-up failed');
      }
    } catch (error : any) {
      console.error('Sign-up failed:', error.message);
      setError('Sign-up failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
  
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
  
  {error && <p className="text-red-500 mb-4">{error}</p>}
  
  <button
    onClick={handleSignUp}
    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    Sign Up
  </button>
</div>

  );
};

export default SignUpPage;
