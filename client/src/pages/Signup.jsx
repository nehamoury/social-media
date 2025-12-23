import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../services/api';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient.signup({
        email: formData.email,
        password: formData.password,
        username: formData.username,
        fullName: formData.name
      });

      if (response.token) {
        // Store token in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        // Redirect to home page
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Oren</span>
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2">Join the community of creators today</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 bg-[#cc0000] text-white rounded-lg hover:bg-[#b30000] font-bold text-sm transition-colors shadow-sm tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account? <Link to="/login" className="text-gray-900 font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
