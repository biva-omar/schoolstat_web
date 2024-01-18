import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SchoolForm from 'src/components/schools/SchoolForm';
import { baseUrl, headers } from 'src/AppConfig';


const AddSchool = () => {

  const navigate = useNavigate()
  const [subCenters, setSubCenters] = useState([])
  const [orders, setOrders] = useState([])

  const addSchool = async (school) => {
    
    axios.post(baseUrl+'/schools/', school, {headers: headers})
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

  const loadSubCenter = () => {
    console.log(headers)
    axios.get(baseUrl+'/exam-sub-centers/', {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setSubCenters(response.data)
            
          }else{
            return []
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
            return []
        });
  }


  const loadOrder = () => {
    
    axios.get(baseUrl+'/teaching-order/', {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setOrders(response.data)
            
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
    loadSubCenter();
    loadOrder()
  }, []);


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter un etablissement d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <SchoolForm addSchool={addSchool} subCenters={subCenters} ordres={orders} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddSchool
