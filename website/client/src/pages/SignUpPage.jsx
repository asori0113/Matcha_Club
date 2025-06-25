import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignUp';
import SignUpForm from '../components/SignUpForm';


const SignUp = () => {
    const [form, setForm] = useState( {
        username: '',
        email: '', 
        password: ''
    });

 const { submit, status, error } = useSignup();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       await submit(form);
    };

    return (
        <div>
            <h2>Sign up</h2>
            {status === 'success' && <p>Signup Successful</p>}
            {error && <p style = {{color: 'red'}}>{error}</p>}
            <SignUpForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                disabled={status === 'loading'}
            />
        </div>
    );


};
 
export default SignUp;
