import React, { useEffect, useState } from 'react';
import "./UserProfile.scss";
import { useSelector } from "react-redux";
import { apiGetUser } from "../../apis/userAPI";
import Avatar from "./Avatar/Avatar";
import BasicInfo from "./BasicInfo/BasicInfo";
import HiredJobs from "./HiredJobs/HiredJobs";

function UserProfile() {
    const [userInfo, setUserInfo] = useState({});
    
    const { user } = useSelector((state) => state.user);

    const getUserInfo = async () => {
        try {
            const data = await apiGetUser(user.user.id);
            console.log(data?.content);
            setUserInfo(data?.content);
        } catch (error) {
            console.log(error?.response?.data?.content);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-4">
                        <Avatar userInfo={userInfo} getUserInfo={getUserInfo}/>
                        <BasicInfo userInfo={userInfo} getUserInfo={getUserInfo}/>
                    </div>
                    <div className="col-12 col-lg-7 mt-5 mt-lg-0">
                        <HiredJobs userInfo={userInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;