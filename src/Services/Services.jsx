import axios from "axios";

axios.defaults.baseURL = 'https://65292dd955b137ddc83e53fe.mockapi.io';

export const getAllTweets = async (signal) => {
    const response = await axios.get('/tweets', {
        signal,
    });
    
    return response.data.results;
};