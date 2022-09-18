// import { Button } from 'bootstrap'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Table } from 'reactstrap'
import { _get, _put } from '../helpers/api'
import { getDoneTasks, getInprogressTasks } from '../redux/action/tasks'
import './Style.css'
export default function InProgressTasks() {
  const user = useSelector(state => state.auth.user)

  const inprogressTasks = useSelector(state => state.tasks.inprogressTasks)
  const dispatch = useDispatch()


  const getTask = useCallback(() => {
    dispatch(getInprogressTasks(user.id))
  }, [dispatch, user])

  useEffect(() => {
    getTask()
  }, [getTask])


  const changeStatus = (id) => {
    _put(`tasks/${id}/update/in_progress`, inprogressTasks, resp => {
      console.log(resp)
      dispatch(getInprogressTasks())
      dispatch(getDoneTasks(user.id))
    }, e => { console.log(e) })
  }

  return (      
    <div className='whole' style={{margin:'70px 50px'}}>
      {/* {JSON.stringify(inprogressTasks)} */}
      {/* <Row>
        <Col md={1}></Col>
        <Col md={10}>
          {inprogressTasks.map((item) => (
            <Card className='shadow-sm dashboard_main_card p-3'>
              <Row>
                <Col md={3}>
                  <p className='task_data'>Title</p>
                  <Card className='shadow-sm p-3 title_card' style={{ hover: 'back' }}>
                    {item.title}
                  </Card>
                </Col>
                <Col md={3}>
                  <p className='task_data'>Description</p>
                  <Card className='shadow-sm p-3 description_card'>
                    {item.description}
                  </Card>
                </Col>
                <Col md={2}>
                  <p className='task_data'>Deadline</p>
                  <Card className='shadow-sm p-3 timeline_card'>
                    {item.timeline}
                  </Card>
                </Col>
                <Col md={2}>
                  <p className='task_data'>Status</p>
                  <Card className='shadow-sm p-3 progress_card'>
                    {item.status}
                  </Card>
                </Col>
                <Col md={2}>
                  <p className='task_data'>Action</p>
                  <Card className='shadow-sm p-3 button_card'>
                    <div className='text-center'>
                      <button className='view_button'>Submit</button>
                      <button className='view_button' onClick={() => changeStatus(item.id)}>Submit</button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={1}></Col>

      </Row> */}
      <Table striped hover borderless size="sm" style={{paddingTop:10}}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Project Name</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Timeline</th>
            <th>Status</th>
            <th>Assigned By</th>
          </tr>
        </thead>
        <tbody>
          {inprogressTasks.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.project_name}</td>
              <td>
                {item.title}
              </td>
              <td>

                {item.description}
              </td>
              <td>
                {item.timeline}
              </td>
              <td>
                <span className='progress_card'>
                  {item.status}
                </span>
              </td>
              <td>
                {item.assigned_by}
              </td>
              <td>
                <button className='view_button' onClick={() => changeStatus(item.id)}>Submit</button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {inprogressTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No in progress task</p> : null}

    </div>
  )
}
