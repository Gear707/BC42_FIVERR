import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from "../../../slices/userSlice";
import { useNavigate } from "react-router-dom";

const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const schema = yup.object({
    email: yup.string().required("Enter your email"),
    password: yup.string().required("Enter your password")
        .matches(
            PASSWORD_FORMAT,
            "The password must have at least 8 characters including uppercase letters, lowercase letters and numbers"
        ),
});

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onTouched",
        resolver: yupResolver(schema)
    });

    const { user, isLoading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navRegister = () => {
        navigate("/register");
    };

    const onSubmit = (values) => {
        dispatch(login(values));
    };

    const onError = (errors) => {
        console.log(errors);
    };

    return (
        <MDBContainer className="p-5 bg-white rounded-7">

            <MDBRow className="justify-content-between">

                <MDBCol col='10' md='7' className="d-flex">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='5'>

                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <h2 className="mb-5 text-center">Login</h2>

                        <div className="mb-3">
                            <MDBInput label='Email address' type='email' size="lg" {...register("email")} />
                            {errors.email &&
                                <p className="mt-1 text-danger">{errors.email.message}</p>}
                        </div>

                        <div className="mb-3">
                            <MDBInput label='Password' type='password' size="lg" {...register("password")} />
                            {errors.password &&
                                <p className="mt-1 text-danger">{errors.password.message}</p>}
                        </div>

                        {error && <p className="text-danger">Wrong email/password</p>}

                        <div className="d-flex justify-content-between mb-3">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <p className="text-center">Don't have an account?
                                <a onClick={navRegister} className="ms-2">Register here</a>
                            </p>
                        </div>

                        <MDBBtn className="mb-2 w-100" size="lg">Log in</MDBBtn>
                    </form>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-3 w-100" size="lg"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://www.facebook.com" target="_blank"
                    >
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="w-100" size="lg"
                        style={{ backgroundColor: '#55acee' }}
                        href="https://twitter.com" target="_blank"
                    >
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;