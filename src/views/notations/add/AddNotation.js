import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NotationForm from 'src/components/notations/NotationForm';
import { baseUrl, headers } from 'src/AppConfig';


const AddNotation = () => {

 
  const navigate = useNavigate()
  const [students, setStudents] = useState([])
  const [matieres, setMatieres] = useState([])

  const addNotation = async (note) => {
    
    axios.post(baseUrl+'/notes/', note, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouvelle note enregistré !', {autoClose:3000})
            navigate("/notations/", { replace: true })
          }else{
            toast.error('Echec enregistrement !', {autoClose:3000})
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  const loadMatiere= () => {
    
    axios.get(baseUrl+'/matieres/', {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setMatieres(response.data)
            
          }else{
            return []
          }
        })
        .catch(error => {
            console.error('There was an error!', error);
            return []
        });
  }


  const loadStudent = () => {
    
    axios.get(baseUrl+'/students/', {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setStudents(response.data)
            
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
    loadStudent();
    loadMatiere()
  }, []);


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Attribuer une note</strong>
          </CCardHeader>
          <CCardBody>
            <NotationForm addNotation={addNotation} matieres={matieres} students={students.content} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNotation
