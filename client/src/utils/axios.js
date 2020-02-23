import axios from 'axios';
const { NODE_ENV } = process.env;
const baseURL = NODE_ENV === 'production' ? 'https://blogify-v3.herokuapp.com/'