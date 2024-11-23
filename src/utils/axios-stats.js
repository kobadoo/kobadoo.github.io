import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kobadoo-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;