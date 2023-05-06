import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubCenterForm from 'src/components/sub-centers /SubCenterForm';
import StudentForm from 'src/components/students/StudentForm';
import { headers } from 'src/AppConfig';


const AddStudent = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
  const [schools, setSchools] = useState([])

  const addStudent = async (student) => {
   
    axios.post(baseUrl+'/students/', student, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouveau sous eleve enregistré !', {autoClose:3000})
            navigate("/students/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  const loadSchools = () => {
    
    axios.get(baseUrl+'/schools/', {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setSchools(response.data)
            
          }else{
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  useEffect(() => {   
    loadSchools();
  }, []);



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter un eleve </strong>
          </CCardHeader>
          <CCardBody>
            <StudentForm addStudent={addStudent} schools={schools}/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddStudent
