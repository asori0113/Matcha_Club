import React, { useState } from 'react';

const SignUpForm = ({ form, onChange, onSubmit, disabled }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={onChange}
                required
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required
            />
            <div style={{ position: 'relative' }}>
                <input 
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={form.password || ''}
                onChange={onChange}
                required
                style={{ paddingRight: '60px'}}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                        position: 'absolute',
                        right: '5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '4px 8px',
                        cursor: 'pointer'
                    }}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <button type="submit" disabled={disabled}>Sign up</button>
        </form>
    );
};

export default SignUpForm;