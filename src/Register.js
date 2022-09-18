import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from './helpers/api';
// import { loginUser } from './redux/action/auth'
export default function Register() {
    let _form =
    {
        username: '',
        email: "",
        rank: "",
        password: "",
    }

    const [registerDetails, setRegisterDetails] = useState(_form);

    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setRegisterDetails((prev) => ({ ...prev, [name]: value }));
    };
    let route = '/pending-tasks'
    const handleSubmit = () => {
        fetch(`${SERVER_URL}/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerDetails)
        })
            .then(raw => raw.json())
            .then(resp => {
                console.log(resp)
            })
            .catch(e => {
                console.log(e)
            })
        console.log(registerDetails)
        navigate(route)
    }



    return (
        <>
            <div className='login-div'>
                <div>
                    <Row className='m-0'>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Card className='p-4 shadow login-card'>
                                <Row>
                                    <Col>
                                        <h3 className=''>Taskify</h3>
                                        <h6 className=''>Register</h6>
                                    </Col>
                                </Row>
                                <input className='input_field mt-3' type='text' name='username' value={registerDetails.username} onChange={handleChange} placeholder='Name' />
                                <input className='input_field mt-3' type='email' name='email' value={registerDetails.email} onChange={handleChange} placeholder='Email' />
                                <input className='input_field mt-3' type='text' name='rank' value={registerDetails.rank} onChange={handleChange} placeholder='Rank' />
                                <input className='input_field mt-3' type='password' name='password' value={registerDetails.password} onChange={handleChange} placeholder='Password' />
                                <button className='action_button mt-3' onClick={handleSubmit}>Register</button>
                                <div className='text-center'>
                                    <p style={{ fontSize: 13, cursor: 'pointer' }} onClick={() => navigate('/')}>Login Here</p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
