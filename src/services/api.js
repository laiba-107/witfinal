import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const registerUser = async (data) => {
  try {
    const response = await api.post('/register', data);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
  }
};
