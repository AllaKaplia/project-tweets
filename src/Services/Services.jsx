import axios from "axios";


const API_BASE_URL = 'https://65292dd955b137ddc83e53fe.mockapi.io';

async function getAllTweets() {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(`Request error: ${error.message}`);
  }
};

export default getAllTweets;