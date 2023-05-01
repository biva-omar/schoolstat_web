import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './scss/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { hasAuthenticated } from './components/services/AuthApi'
import Auth from './context/Auth'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const isAuthenticated = () => { 
  const token = localStorage.getItem('token');
  try {
    if(token){
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    return true;
  }
}



class App extends Component {

  state = {   
    isAuthenticated: isAuthenticated,
  } 
 
  setAuthenticated = (value) => {      
    this.setState({
        isAuthenticated: value
    });
  }

  render() {
    return (
      <Auth.Provider value={this.state.isAuthenticated}> 
      <HashRouter>
        <Suspense fallback={loading}>
        <ToastContainer />
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} setAuthenticated={this.setAuthenticated}/>
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout isAuthenticated={this.state.isAuthenticated} setAuthenticated={this.setAuthenticated} />} />
          </Routes>
        </Suspense>
      </HashRouter>
      </Auth.Provider>
    )
  }
}

export default App
