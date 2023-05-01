import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubCenterForm from 'src/components/sub-centers /SubCenterForm';


const AddSubCenter = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
  const [centers, setCenters] = useState([])

  const addSubCenter = async (subCenter) => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.post(baseUrl+'/exam-sub-centers/', subCenter, {headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouveau sous centre enregistré !', {autoClose:3000})
            navigate("/subcenters/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  const loadCenter = () => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.get(baseUrl+'/exam-centers/')
        .then(response => {
          if(response.status == 200 ){
            setCenters(response.data)
            
          }else{
            return []
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
            return []
        });
  }

  useEffect(() => {   
    loadCenter();
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter un Centre Sous d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <SubCenterForm addSubCenter={addSubCenter} centers={centers} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddSubCenter
