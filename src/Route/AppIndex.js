import React from "react";
import { Col, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
export default function AppIndex() {
    return (
        <div className='home-container'>
            <Navbar />
            <Row className='m-0 p-0'>
                <Col md={2} className='sidebar_col'>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </div >
    );
}
