import { useState } from 'react';
import { signup } from '../services/auth-service';

export const useSignup = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const submit = async (formData) => {
        setStatus('loading');
        setError(null);
        try {
            const result = await signup(formData);
            setStatus('success');
            return result;
        } catch(err) {
            setStatus('error');
            setError(err.message);
        }
    };

    return { submit, status, error };
};