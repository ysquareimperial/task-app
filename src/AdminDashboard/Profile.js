import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Row } from 'reactstrap'
import profile from '../images/profile.jpg'
export default function Profile() {
    const user = useSelector(state => state.auth.user)

    return (
        <div className='m-5'>
            {/* {JSON.stringify(user)} */}
            <Card className='create_task_card p-3 shadow-sm'>
                <p className='task_data'>User Profile</p>
                <div className='profile-div'>
                    <img src={profile} alt='profilepicture' className='profile-image shadow' />
                </div>
                <div className='profile-data-div p-4'>
                    <Row className='pt-5'>
                        <p style={{fontWeight:'bold', fontSize:'30px', margin:0}}>
                            {user.name}
                        </p>
                        <p style={{margin:0}}>
                            {user.email}
                        </p>
                        <p>
                            {user.rank}
                        </p>
                    </Row>
                </div>
            </Card>
        </div>
    )
}
