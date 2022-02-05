import axios from 'axios';

const instance = axios.create({
    // local API endpoint
    baseURL: "https://mernblog-api.herokuapp.com/api/"
})

export default instance;