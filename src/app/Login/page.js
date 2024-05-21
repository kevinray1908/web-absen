// Import necessary components and CSS
"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './page.css'; // Import your custom CSS file

// Inside your component
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        });

        if (result.error) {
            // Show toast notification for incorrect username or password
            toast.error("Username or Password is incorrect");
        } else {
            // Redirect to the desired page after successful login
            window.location.href = '/main';
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h2 className='font-bold'>Login</h2>
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
            <ToastContainer
                position="top-right" // Adjust position as needed
                autoClose={5000} // Adjust autoClose time as needed
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
