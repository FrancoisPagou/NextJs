import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'; 

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '673d1ed8bemshaf1c9656316167cp1f0db1jsn5856c3946b35'
        }
    });

    return data;    
}