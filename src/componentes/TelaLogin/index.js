import React, { useState } from 'react';
import './TelaLogin.css';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
        // Add your login validation logic here
        if (email === 'example@example.com' && password === 'password') {
            console.log('Login successful');
            // Perform actions after successful login
        } else {
            console.log('Invalid credentials');
            // Perform actions for invalid login
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default TelaLogin;
