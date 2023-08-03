import axios from 'axios';
import { toast } from 'react-toastify';

export const handleRequest = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    toast.error('Wystąpił błąd podczas pobierania danych.');
    throw error;
  }
};

export const apiUrl = 'https://api.themoviedb.org/3/';
export const apiKey = '1ad1bae9c9df702cde78c3732ce10329';
