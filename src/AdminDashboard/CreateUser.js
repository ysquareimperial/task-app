import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import Button from './Button'
// import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../helpers/api';
export default function CreateUser() {
    let _form = 
        {
            username: "",
            email: "",
            rank: "",
        }
    // const navigate = useNavigate();
    const [createUser, setCreateUser] = useState(_form);
    const handleChange = ({ target: { name, value } }) => {
        setCreateUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setCreateUser((p) => ({
            ...p, username: "",
            email: "",
            rank: "",
        }))   
    }
    const handleSubmit = () => {
        handleReset()
        console.log(createUser)

        fetch(`${SERVER_URL}/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createUser)
        })
            .then(raw => raw.json())
            .then(resp => {
                console.log(resp)
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <div className='m-5'>
            <Card className='create_task_card p-5 shadow-sm'>
                <p className='task_data'>Create User</p>
                <Row>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            User Name
                        </p>
                        <input className='input_field mb-3' type='text' name='username' value={createUser.username} onChange={handleChange} />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Rank
                        </p>
                        <select className='input_field mb-3' name='rank' value={createUser.rank} onChange={handleChange}>
                            <option>select rank</option>
                            <option>CEO</option>
                            <option>Manager</option>
                            <option>Senior Developer</option>
                            <option>Junior Developer</option>
                            <option>Fullstack Developer</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                        </select>
                    </Col>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Email
                        </p>
                        <input type='email' className='input_field mb-3' name='email' value={createUser.email} onChange={handleChange} />
                    </Col>
                </Row>
                {/* <div>
                    <button >Create</button>
                </div> */}
                <Button buttonText={'Create User'} onClick={() => {
                    handleSubmit()
                }
                } />
            </Card >
        </div >
    )
}
