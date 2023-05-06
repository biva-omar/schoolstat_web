import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import CenterForm from 'src/components/centers/CenterForm'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { headers } from 'src/AppConfig';

const AddCenter = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
 
  const addCenter = async (center) => {
    
    axios.post(baseUrl+'/exam-centers/', center, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouveau centre enregistré !', {autoClose:3000})
            navigate("/centers/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter un Centre d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <CenterForm addCenter={addCenter} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddCenter
