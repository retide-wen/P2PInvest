import axios from 'axios';

const API_URL = 'https://bdrpghcuqa.execute-api.us-east-1.amazonaws.com/'; // Replace with your API endpoint

export const GetExistNotes = async (endpoint:string) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};