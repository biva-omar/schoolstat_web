import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import ClassroomForm from 'src/components/classrooms/ClassroomForm';

const AddClassroom = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
  const [subCenters, setSubCenters] = useState([])
 
  const addClassroom = async (classroom) => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.post(baseUrl+'/exam-classrooms/', classroom, {headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouveau salle enregistré !', {autoClose:3000})
            navigate("/classrooms/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  }


  const loadSubCenter = () => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.get(baseUrl+'/exam-sub-centers/')
        .then(response => {
          if(response.status == 200 ){
            setSubCenters(response.data)
            
          }else{
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  useEffect(() => {   
    loadSubCenter();
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter une salle d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <ClassroomForm addClassroom={addClassroom} subCenters={subCenters} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddClassroom
