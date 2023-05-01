import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SchoolForm from 'src/components/schools/SchoolForm';


const AddNotation = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
  const [subCenters, setSubCenters] = useState([])
  const [orders, setOrders] = useState([])

  const addNote = async (note) => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.post(baseUrl+'/notes/', note, {headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouvel etablissement enregistré !', {autoClose:3000})
            navigate("/notes/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
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
            return []
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
            return []
        });
  }


  const loadOrder = () => {
    const headers = { 
      /*'Authorization': 'Bearer my-token',*/
      'Content-type': 'application/json',
    };
    
    axios.get(baseUrl+'/teaching-order/')
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
            <strong>Attribuer une note</strong>
          </CCardHeader>
          <CCardBody>
            <SchoolForm addNote={addNote} subCenters={subCenters} ordres={orders} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNotation
