// pages/login.js
"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import './page.css'; // Import file CSS

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        });

        if (result.error) {
            setError(result.error);
        } else {
            setError('');
            // Redirect to the desired page after successful login
            window.location.href = '/main';
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className='font-bold'>Login</h2>
                {error && <p className="error">{error}</p>}
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
