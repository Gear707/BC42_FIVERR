import React from 'react';
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
    return (
        <div className={styles.authBody}>
            <Outlet />
        </div>
    );
}

export default AuthLayout;