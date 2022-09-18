import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap'
import { _get, _post } from '../helpers/api';
import Button from './Button'
import { useSelector } from 'react-redux'
export default function CreateTask() {
    const user = useSelector(state => state.auth.user)

    let _form =
    {
        project_name: '',
        title: "",
        description: "",
        timeline: '',
        assigned_to: '',
        assigned_by: user.id
    }
    const navigate = useNavigate();
    const [getProjects, setGetProjects] = useState([])
    const [getUsers, setGetUsers] = useState([])
    const [createTask, setCreateTask] = useState(_form);

    const handleChange = ({ target: { name, value } }) => {
        setCreateTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setCreateTask((p) => ({
            ...p, project_name: "",
            title: "",
            description: "",
            timeline: '',
            assigned_to: '',
            assigned_by: user.id
        }))
    }
    const handleSubmit = () => {
        let newObj = {
            project_name: parseInt(createTask.project_name),
            title: createTask.title,
            description: createTask.description,
            timeline: createTask.timeline,
            assigned_to: createTask.assigned_to,
            assigned_by: parseInt(createTask.assigned_by)
        }

        _post(`create/task`, newObj, resp => { console.log(resp) }, e => { console.log(e) })

        handleReset()
        console.log(createTask)
        navigate('/admin/pending-tasks')
    }



    useEffect(() => {
        _get(`getprojects/${user.id}`, resp => {
            console.log(resp)
            if (resp && resp.length) {
                setGetProjects(resp)
            }
        }, e => { console.log(e) })
    }, [user.id])

    useEffect(() => {
        _get(`users`, resp => {
            console.log(resp)
            setGetUsers(resp)
        },
            e => { console.log(e) }
        )
    }, [])



    return (
        <div className='m-5'>
            {/* {JSON.stringify(createTask)} */}
            <Card className='create_task_card p-3 shadow-sm'>
                <p className='task_data'>Create Task</p>
                <Row>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Select Project
                        </p>
                        <select className='input_field mb-3' name='project_name' onChange={handleChange}>
                            <option>select a project</option>
                            {getProjects.map((item) => (
                                <option value={parseInt(item.id)}>{item.name}</option>
                            ))}
                        </select>

                        <p style={{ margin: 0, color: 'grey' }}>
                            Description
                        </p>
                        <textarea className='mb-3 texttext' placeholder='write here...' name='description' value={createTask.description} onChange={handleChange}></textarea>
                    </Col>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Title
                        </p>
                        <input className='input_field mb-3' type='text' name='title' value={createTask.title} onChange={handleChange} />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Deadline
                        </p>
                        <input className='input_field mb-3' type='datetime-local' placeholder='timeline' name='timeline' value={createTask.timeline} onChange={handleChange} />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Assign to
                        </p>

                        <select className='input_field' name='assigned_to' onChange={handleChange}>
                            <option>select a user</option>
                            {getUsers.map((item) => (
                                <option value={item.id}>{item.email}</option>
                            ))}
                        </select>
                    </Col>
                </Row>
                <Button buttonText={'Create Task'} onClick={handleSubmit} />
            </Card>
        </div>
    )
}
