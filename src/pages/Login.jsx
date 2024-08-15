// src/pages/Login.jsx

import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../authConfig";

function Login() {
    const { instance, accounts } = useMsal();
    const navigate = useNavigate();

    useEffect(() => {
        instance.handleRedirectPromise().then((response) => {
            if (response) {
                // If a response is received, redirect to the desired path
                navigate("/tfac-short-link", { replace: true });
            } else if (accounts.length > 0) {
                // If the user is already authenticated, redirect them
                navigate("/tfac-short-link", { replace: true });
            }
        }).catch((e) => {
            console.error(e);
        });
    }, [instance, accounts, navigate]);

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch((e) => {
            console.error(e);
        });
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with Azure AD</button>
        </div>
    );
}

export default Login;
