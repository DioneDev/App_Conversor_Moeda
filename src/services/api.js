import axios from 'axios';

// https://free.currencyconverterapi.com/api/v5/
// convert?q=USD_BRL&compact=ultra&apiKey=4cbd03b39b0c7aa42dd8

const api = axios.create({
    baseURL:'https://free.currencyconverterapi.com/api/v5/'
});

export default api;