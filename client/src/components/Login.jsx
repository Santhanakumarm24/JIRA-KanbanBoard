import React from 'react';
import './Styles/login.css'
const Login = () => {


    const handleLogin = () => {
        // Redirect to your Node.js backend's login route
        window.location.href = `https://jira-kanbanboard.onrender.com/auth/github`;
    };
    return (
        <div>
            <button
                className='github-login-btn'
                onClick={handleLogin}
            >Login with GitHub</button>
        </div>
    );

}

export default Login;
