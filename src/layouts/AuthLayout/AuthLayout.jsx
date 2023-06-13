import React from 'react';
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{
                height: "100vh",
                backgroundImage: "radial-gradient(circle farthest-corner at 10% 20%, rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )"
            }}
        >
            <Outlet />
        </div>
    );
}

export default AuthLayout;