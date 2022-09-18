import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { SERVER_URL, _get, _post } from '../helpers/api';
import { useSelector } from 'react-redux'

export default function CreateProject() {
    const user = useSelector(state => state.auth.user)
    let _form =
    {
        name: "",
      }

    const navigate = useNavigate();
    const [createProject, setCreateProject] = useState(_form);
    const handleChange = ({ target: { name, value } }) => {
        setCreateProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setCreateProject((p) => ({
            ...p, name: '',
         }))
    }

    const handleSubmit = () => {
        _post(`create/project/${user.id}`, createProject, resp => {
            console.log(resp)
        }, e => {
            console.log(e)
        })
        handleReset()
        console.log(createProject)
        setCreateProject(_form)
        navigate('/admin/all-projects')
    }

    return (
        <div className='m-5'>
            {/* {JSON.stringify(CreateProject)} */}
            <Card className='create_task_card p-5 shadow-sm'>
                <p className='task_data'>Create Project</p>
                <Row>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Project Name
                        </p>
                        <input className='input_field mb-3' type='text' name='name' value={createProject.name} onChange={handleChange} />
                     </Col>
                    <Col md={6}>
                     </Col>
                </Row>
                <Button buttonText={'Create Project'} onClick={() => {
                    handleSubmit()
                }} />
            </Card >
        </div >
    )
}
