import axios from './baseURL';

export const login = async (credentials) => {
  try {
    const response = await axios.post('auth/login', credentials);
    const token = response.data.accessToken;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.log('Login failed', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  /// Additional cleanup code if needed
  alert('Logout successful');
};
