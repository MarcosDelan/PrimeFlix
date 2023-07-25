//75a874692b5497ed3452ef3e57e0759a
import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;