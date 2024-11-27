import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    // Function to check if password and confirm password match
    const validatePasswords = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError(null); // Clear error if passwords match
        }
    };

    // Validate passwords on every render, when password or confirmPassword changes
    React.useEffect(() => {
        validatePasswords();
    }, [password, confirmPassword]);

    const handleRegister = () => {
        if (error) {
            console.log('Please fix the errors');
            return;
        }
        console.log('Registering with:', { email, password });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h3 className="card-title text-center mb-4">Register</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleRegister}
                            disabled={!!error || !email || !password || !confirmPassword}
                        >
                            Register
                        </button>
                    </div>
                </form>
                <h3 className="d-flex justify-content-center align-items-center">
                    <a href="/">Login</a>
                </h3>
            </div>
        </div>
    );
};

export default Register;
