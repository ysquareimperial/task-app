import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { loginUser } from './redux/action/auth';
import CustomButton from './components/CustomButton';
export default function Login() {
  let _form =
  {
    username: "",
    password: ""
  }

  const [loading, setLoading] = useState(false)
  const [loginDetails, setLoginDetails] = useState(_form);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = ({ target: { name, value } }) => {
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  let routeTo = '/admin'
  const handleSubmit = () => {
    if (loginDetails.username === '' || loginDetails.password === '') {
      alert('Username or Password cant be empty')
    }
    else {

      setLoading(true)
      dispatch(loginUser(loginDetails, () => {
        setLoading(false)
        navigate(routeTo)
        console.log("successfully")
      }, (err) => {
        setLoading(false)
        console.log(err)
        alert("Password or Username is not correct ")
      }))
      console.log(loginDetails)
    }
  }


  // const dataFormat = `grant_type=&username=${loginDetails.username}&password=${loginDetails.password}&scope=&client_id=&client_secret=`

  // const handleSubmit = () => {
  //   fetch(`${SERVER_URL}/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: JSON.stringify(dataFormat)
  //   })
  //     .then(raw => raw.json())
  //     .then(resp => {
  //       console.log(resp)
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     })

  //   console.log(dataFormat)
  //   navigate('/admin')
  // }



  return (
    <>
      {/* {} */}
      <div className='login-div'>
        <div>
          <Row className='m-0'>
            <Col md={4}></Col>
            <Col md={4}>
              <Card className='p-4 shadow login-card'>
                <Row>
                  {/* {JSON.stringify(loginDetails)} */}
                  <Col>
                    <h3 className=''>Taskify</h3>
                    <h6 className=''>Login</h6>
                  </Col>
                </Row>
                <input className='input_field mt-3' type='text' name='username' value={loginDetails.username} onChange={handleChange} placeholder='Username' />
                <input className='input_field mt-3' type='password' name='password' value={loginDetails.password} onChange={handleChange} placeholder='Password' />
                <CustomButton className='action_button mt-3' onClick={handleSubmit} loading={loading} buttonText='Login'></CustomButton>
                <div className='text-center'>
                  <p style={{ fontSize: 13, cursor: 'pointer' }} onClick={() => navigate('/register')}>Register Here</p>
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
