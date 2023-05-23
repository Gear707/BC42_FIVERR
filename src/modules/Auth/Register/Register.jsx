import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBInput,
    MDBRadio,
}
    from 'mdb-react-ui-kit';
import styles from "./Register.module.scss";

function Register() {
    const [isMale, setIsMale] = useState(true);

    return (
        <MDBContainer className='mx-4 px-0 px-lg-5 py-2 rounded-7 bg-white'>
            <MDBRow className='g-0 d-lg-flex align-items-center justify-content-center'>

                <MDBCol lg='4' className="d-none d-lg-block">
                    <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                </MDBCol>

                <MDBCol lg='8'>
                    <MDBRow className='justify-content-center align-items-center m-5'>
                        <form>
                            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-4 text-center">Registration Form</h3>

                            <MDBRow>
                                <MDBCol col='12' md='6' lg='6'>
                                    <MDBInput wrapperClass='mb-4' label='Name' size='lg' type='text' />
                                </MDBCol>

                                <MDBCol md='6' lg='6'>
                                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' type='email' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol sm='6' md='6' lg='6'>
                                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' type='password' />
                                </MDBCol>

                                <MDBCol sm='6' md='6' lg='6'>
                                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' type='tel' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol sm='6' md='6' lg='6'>
                                    <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' type='date' />
                                </MDBCol>

                                <MDBCol sm='6' md='6' lg='6' className='mb-4 d-flex align-items-center'>
                                    <span className="fw-bold me-3">Gender: </span>
                                    <MDBRadio checked={isMale} onChange={() => setIsMale(true)}
                                        name='gender' id='male' value='male' label='Male' inline />
                                    <MDBRadio checked={!isMale} onChange={() => setIsMale(false)}
                                        name='gender' id='female' value='female' label='Female' inline />
                                    {/* <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline /> */}
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <div className="form-group mb-4">
                                    <select id="role" className="form-select" style={{ lineHeight: "2" }} required>
                                        <option value="">Select role</option>
                                        <option value="1">USER</option>
                                        <option value="2">ADMIN</option>
                                    </select>
                                </div>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' label='Skill' size='lg' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' label='Certification' size='lg' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn className={`${styles.submitBtn} w-100`} size='lg'>
                                Submit
                            </MDBBtn>
                        </form>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;