// src/axios.js
import axios from 'axios';

export const createAxiosInstance = () => {
	return axios.create({
		baseURL: import.meta.env.VITE_APP_API_URL,
		withCredentials: true,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		timeout: 20000
	});
};
//
