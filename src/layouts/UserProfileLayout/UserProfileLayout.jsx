import React from 'react';
import Header from "../../components/Header/Header";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

function UserProfileLayout() {
    const { user } = useSelector((state) => state.user);
    const { name } = useParams();

    if (!user) {
        return <h1>Page Not Found</h1>;
    } else {
        if (user.user.name !== name) return <h1>Wrong username</h1>;
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserProfileLayout;