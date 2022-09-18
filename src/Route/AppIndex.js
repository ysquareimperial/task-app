import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getDoneTasks, getInprogressTasks, getPendingTasks } from "../redux/action/tasks";

// import Sidebar from "../Sidebar";
export default function AppIndex() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPendingTasks(user.id))
        dispatch(getInprogressTasks(user.id))
        dispatch(getDoneTasks(user.id))
    }, [dispatch, user])
    return (
        <div className=''>
            <Navbar />
            <Row className='m-0 p-0'>
                {/* <Col md={2} className='sidebar_col'>
                    <Sidebar />
                </Col> */}
                {/* <Col md={1}></Col> */}
                <Col md={12}>
                    <Outlet />
                </Col>
                {/* <Col md={1}></Col> */}
            </Row>
        </div >
    );
}
