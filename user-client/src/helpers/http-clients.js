import axios from 'axios'

export const sspApi = axios.create({ baseURL: 'http://localhost:3000/' })