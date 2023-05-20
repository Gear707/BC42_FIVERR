import React from 'react';
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

function Login() {
    const { user, isLoading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <MDBContainer className="p-5 bg-white rounded-7">

            <MDBRow className="justify-content-between">

                <MDBCol col='10' md='7'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='5'>

                    <h2 className="mb-5 text-center">Login</h2>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />


                    <div className="d-flex justify-content-between mb-3">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <p className="text-center">Don't have an account?
                            <a href="#" className="ms-2">Register here</a>
                        </p>
                    </div>

                    <MDBBtn className="mb-2 w-100" size="lg">Log in</MDBBtn>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;