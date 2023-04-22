import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SchoolForm from 'src/components/schools/SchoolForm';


const AddSchool = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()

  const addSchool = async (school) => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.post(baseUrl+'/schools/', school, {headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouvel etablissement enregistré !', {autoClose:3000})
            navigate("/schools/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter un etablissement d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <SchoolForm addSchool={addSchool} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddSchool
