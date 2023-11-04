import axios from "axios";


const API_BASE_URL = 'https://65292dd955b137ddc83e53fe.mockapi.io';

export const getAllTweets = async() => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(`Request error: ${error.message}`);
  }
};

export const updateFollowers = async (userId, increment) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    if (response.status === 200) {
      const user = response.data;
      
      user.followers += increment;
      
      const updateResponse = await axios.put(`${API_BASE_URL}/users/${userId}`, user);
      
      if (updateResponse.status === 200) {
        return user;
      } else {
        throw new Error('Failed to update user data');
      }
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    throw new Error(`Request error: ${error.message}`);
  }
}