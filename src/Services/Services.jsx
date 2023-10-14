import axios from "axios";

axios.defaults.baseURL = 'https://65292dd955b137ddc83e53fe.mockapi.io';
const perPage = 3;

export const getAllTweets = async (signal) => {
    const response = await axios.get('/tweets', {
        signal,
        params: {
            per_page: perPage,
        }
    });

    console.log(response);
    console.log(response.data);
    
    return response.data;
};