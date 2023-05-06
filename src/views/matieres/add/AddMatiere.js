import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, } from '@coreui/react'
import CenterForm from 'src/components/centers/CenterForm'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import MatiereForm from 'src/components/matieres/MatiereForm';
import { headers } from 'src/AppConfig';

const AddMatiere = () => {

  const baseUrl ='http://localhost:8081';
  const navigate = useNavigate()
 
  const addMatiere = async (matiere) => {

    axios.post(baseUrl+'/matieres/', matiere, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            toast.success('Nouvelle matière enregistré !', {autoClose:3000})
            navigate("/matieres/", { replace: true })
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
            <strong>Ajouter une Matiere</strong>
          </CCardHeader>
          <CCardBody>
            <MatiereForm addMatiere={addMatiere} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddMatiere
