import React, { useState } from 'react';
// use fetch instead of axios to avoid bundling/polyfill issues
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const resp = await fetch('http://localhost:3002/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ email, username, password }),
                });
                const data = await resp.json().catch(() => ({}));
                console.log('[SignUp] response', resp.status, data);
                if (resp.ok && data.success) {
                    navigate('/login');
                } else {
                    setError(data.message || `Signup failed (${resp.status})`);
                }
        } catch (err) {
                console.error('[SignUp] error', err);
                setError(err.message || 'Signup failed');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{maxWidth: 480}}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button className="btn btn-primary" type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;