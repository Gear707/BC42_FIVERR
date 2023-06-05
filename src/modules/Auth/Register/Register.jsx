import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import styles from "./Register.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { apiRegister } from "../../../apis/userAPI";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NAME_FORMAT = /^[\p{L}\s]{2,}$/u;
const PHONENUMBER_FORMAT = /^0[0-9]{9}$/i;

const schema = yup.object({
    name: yup.string()
        .required("Name is required")
        .matches(
            NAME_FORMAT,
            "Name must be at least 2 letters and can only consist of alphabet characters",
        ),
    email: yup.string().email()
        .required("Email is required"),
    password: yup.string()
        .required("Password is required")
        .matches(
            PASSWORD_FORMAT,
            "Password must have at least 8 characters including uppercase letters, lowercase letters and numbers",
        ),
    phone: yup.string()
        .required("Phone number is required")
        .matches(
            PHONENUMBER_FORMAT,
            "Wrong format",
        ),
    birthday: yup.string()
        .required("Birthday is required"),
    gender: yup.boolean(),
    role: yup.string()
        .required("Role is required"),
});

function Register() {
    const { user } = useSelector((state) => state.user);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            gender: true,
            role: "",
            skill: [],
            certification: []
        },
        mode: "onTouched",
        resolver: yupResolver(schema),
    });

    const registerUserInfo = async (values) => {
        try {
            const data = await apiRegister(values);
            console.log(data);
        } catch (error) {
            console.log(error.response?.data?.content);
        }
    };

    const onSubmit = (values) => {
        values.birthday = dayjs(values.birthday).format("MM/DD/YYYY");
        values.skill = values.skill.split(", ");
        values.certification = values.certification.split(", ");
        console.log(values);
        registerUserInfo(values);
    };

    const onError = (errors) => {
        console.log(errors);
    };

    const navigate = useNavigate();

    if (user) return <Navigate to="/" />;

    return (
        <MDBContainer className='mx-4 px-0 px-lg-5 rounded-7 bg-white'>
            <MDBRow className='g-0 d-lg-flex align-items-center justify-content-center'>
                <MDBCol lg='4' className="d-none d-lg-block">
                    <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                </MDBCol>

                <MDBCol lg='8'>
                    <MDBRow className='justify-content-center align-items-center m-5'>
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-4 text-center">
                                Registration Form
                            </h3>

                            <MDBRow>
                                <MDBCol col='12' md='6' lg='6'
                                    className={errors.name ? '' : 'mb-3'}
                                >
                                    <MDBInput label='Name' size='lg' type='text'
                                        {...register("name")}
                                    />
                                    {errors.name &&
                                        <p className="mt-1 mb-2 text-danger">
                                            {errors.name.message}
                                        </p>
                                    }
                                </MDBCol>

                                <MDBCol md='6' lg='6' className={errors.email ? '' : 'mb-3'}>
                                    <MDBInput label='Email' size='lg' type='email'
                                        {...register("email")}
                                    />
                                    {errors.email &&
                                        <p className="mt-1 mb-2 text-danger">
                                            {errors.email.message}
                                        </p>
                                    }
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol sm='6' md='6' lg='6'
                                    className={errors.password ? '' : 'mb-3'}
                                >
                                    <div className="input-group">
                                        <MDBInput wrapperClass='col-10'
                                            label='Password' size='lg'
                                            type={showPassword ? 'text' : 'password'}
                                            {...register("password")}
                                        />
                                        <div className={`input-group-text col-2 
                                        ${styles.togglePassword} 
                                        ${showPassword ? 'visible' : ''}`
                                        }
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ?
                                                <i className="fa-solid fa-eye"></i>
                                                :
                                                <i className="fa-solid fa-eye-slash"></i>
                                            }
                                        </div>
                                    </div>
                                    {errors.password &&
                                        <p className="mt-1 mb-2 text-danger">
                                            {errors.password.message}
                                        </p>
                                    }
                                </MDBCol>

                                <MDBCol sm='6' md='6' lg='6'
                                    className={errors.phone ? '' : 'mb-3'}
                                >
                                    <MDBInput label='Phone Number' size='lg' type='tel'
                                        {...register("phone")}
                                    />
                                    {errors.phone &&
                                        <p className="mt-1 mb-2 text-danger">
                                            {errors.phone.message}
                                        </p>
                                    }
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol sm='6' md='6' lg='6'
                                    className={errors.birthday ? '' : 'mb-3'}
                                >
                                    <MDBInput label='Birthday' size='lg' type='date'
                                        {...register("birthday")}
                                    />
                                    {errors.birthday &&
                                        <p className="mt-1 mb-2 text-danger">
                                            {errors.birthday.message}
                                        </p>
                                    }
                                </MDBCol>

                                <MDBCol sm='6' md='6' lg='6' className='mb-3'>
                                    <div className="form-group">
                                        <select className="form-select " style={{ lineHeight: "2" }} {...register("gender", { valueAsBoolean: true })}
                                        >
                                            <option value="true">Male</option>
                                            <option value="false">Female</option>
                                        </select>
                                    </div>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className={errors.role ? '' : 'mb-3'}>
                                <div className="form-group">
                                    <select className="form-select" style={{ lineHeight: "2" }} {...register("role")}
                                    >
                                        <option value="">Select role</option>
                                        <option>USER</option>
                                        <option>ADMIN</option>
                                    </select>
                                </div>
                                {errors.role &&
                                    <p className="mt-1 mb-2 text-danger">
                                        {errors.role.message}
                                    </p>
                                }
                            </MDBRow>

                            <MDBRow>
                                <MDBCol className='mb-3'>
                                    <MDBInput type='text' size='lg'
                                        label='Skill: Teamwork, Communication, Problem Solving,...'
                                        {...register("skill")}
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol className='mb-3'>
                                    <MDBInput type='text' size='lg'
                                        label='Certification: Project Management, Business Analyst, Supply Chain,...'
                                        {...register("certification")}
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn className={`${styles.submitBtn} w-100`} size='lg'>
                                Submit
                            </MDBBtn>
                        </form>
                        <p className="mt-3">
                            Already have an account?
                            <a onClick={() => navigate("/login")} className="ms-2">Login here</a>
                        </p>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;