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
                // ข้อมูลผู้ใช้ที่ได้จาก Azure AD
                const user = response.account;

                // บันทึกข้อมูลผู้ใช้ (เช่น บันทึกในฐานข้อมูลหรือสถานที่อื่น ๆ)
                saveUserData(user);

                // Redirect ไปยังเส้นทางที่ต้องการ
                navigate("/tfac-short-link", { replace: true });
            } else if (accounts.length > 0) {
                // ถ้าผู้ใช้ล็อกอินอยู่แล้ว
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

    // ฟังก์ชันบันทึกข้อมูลผู้ใช้
    const saveUserData = (user) => {
        // ตัวอย่างการบันทึกข้อมูลใน LocalStorage (คุณสามารถเปลี่ยนให้บันทึกในฐานข้อมูลหรืออื่น ๆ ได้)
        localStorage.setItem('user', JSON.stringify(user));
        // หรือใช้ API เพื่อส่งข้อมูลไปยัง backend เพื่อบันทึกในฐานข้อมูล
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with Azure AD</button>
        </div>
    );
}

export default Login;
