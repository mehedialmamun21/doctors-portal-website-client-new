import { useEffect, useState } from 'react';
import axios from 'axios';

function useAxiosSecure() {
    const [axiosInstance, setAxiosInstance] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'https://api.example.com', // Replace with your API base URL
            timeout: 5000, // Set a timeout for requests (adjust as needed)
            headers: {
                'Content-Type': 'application/json', // Set the content type for requests (adjust as needed)
                // Add any other headers you require for your API requests
            },
        });

        // Add a request interceptor to set loading state and handle errors
        instance.interceptors.request.use(
            (config) => {
                setLoading(true);
                setError(null);
                return config;
            },
            (error) => {
                setLoading(false);
                setError(error);
                return Promise.reject(error);
            }
        );

        // Add a response interceptor to handle responses and stop loading
        instance.interceptors.response.use(
            (response) => {
                setLoading(false);
                setData(response.data);
                return response;
            },
            (error) => {
                setLoading(false);
                setError(error);
                return Promise.reject(error);
            }
        );

        setAxiosInstance(instance);
    }, []);

    const get = async (url) => {
        try {
            const response = await axiosInstance.get(url);
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
        }
    };

    return { data, error, loading, get };
}

export default useAxiosSecure;
