import React, { useContext, useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormFeedback, CFormInput, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { toast } from 'react-toastify'
import axios from 'axios'
import { login } from 'src/components/services/AuthApi'
import Auth from 'src/context/Auth'

const Login = ({isAuthenticated}) => {

  const [validated, setValidated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUrl =  "http://localhost:8081/auth/sign-in"
  const navagation = useNavigate()     
  //const {isAuthenticated, setAuthenticated} = useContext(Auth) 

  const handleSubmit = async (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
        const hash = btoa(username  + ":" + password);
        const anonyHeaders = {
          "Authorization":"Basic " + hash,
          "Content-Type":"application/json"
        }
        try{
          const response = await login(anonyHeaders)
          //isAuthenticated = response.data
          //navagation('/dashboard', { replace: true })
          window.location.href = "#/dashboard";
        }catch(response){
          toast.error("Nom d'utilisateur ou mot de passe incorrect")
           console.log(response)
        }
    }
    
  }

  useEffect(() => {
    if(isAuthenticated){
      navagation('/dasboard')
      }
    }, [navagation, isAuthenticated])


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4 m-5 text-center">
                <CCardBody>
                  <CForm onSubmit={handleSubmit} noValidate validated={validated}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username" 
                        value={username} required 
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <CFormFeedback invalid>Username ne peut pas etre vide.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <CFormFeedback invalid>Password ne peut pas etre vide.</CFormFeedback>
                    </CInputGroup>
                    
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%', display: 'none' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
