// API service for making HTTP requests
const API_BASE_URL = 'http://localhost:5000/api';

export const apiClient = {
  // Get all videos
  getVideos: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/videos`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  },

  // Get single video by ID
  getVideo: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/videos/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching video:', error);
      throw error;
    }
  },

  // Upload a new video
  uploadVideo: async (videoData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/videos`, {
        method: 'POST',
        body: JSON.stringify(videoData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Error uploading video:', error);
      throw error;
    }
  },

  // Search videos
  searchVideos: async (query) => {
    try {
      const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
      return await response.json();
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error;
    }
  },

  // Get channel info
  getChannel: async (channelId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/channels/${channelId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching channel:', error);
      throw error;
    }
  },

  // User login
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }

      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  // User signup
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to create account');
      }

      return data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  },

  // Get user profile
  getUserProfile: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },
};

export default apiClient;
