import React from 'react';

const SignUpForm = ({ form, onChange, onSubmit, disabled }) => (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={onChange}
            required
        />
        <input
            type="text"
            email="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
        />
        <input 
            type="text"
            password="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
        />

        <button type="submit" disabled={disabled}>Sign up</button>
    </form>
);

export default SignUpForm;