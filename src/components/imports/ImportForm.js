import React, { useState } from 'react'

import { CButton, CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CRow, CSpinner, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEyedropper, cilPencil, cilPlus, cilSave, cilTrash, cilViewStream } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from 'src/AppConfig'
import { toast } from 'react-toastify'
import axios from 'axios'

const ImporForm = ({ file, inc, resource}) => {

  const navigate = useNavigate()
  const [showSpinButton, setShowSpinButton] = useState(false)
  const [validated, setValidated] = useState(false)
  const [csvFile, setCsvFile] = useState();
  const formData = new FormData();

  const handleChange = (e) => {
   
    if (e.currentTarget.files) setCsvFile(e.currentTarget.files[0]);
  };



  const handleSubmit = async (event) => {
    event.preventDefault()
    setShowSpinButton(true)
    const form = event.currentTarget
    setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setShowSpinButton(false)
    }else{
      

    setShowSpinButton( await imports(event))

    }
    
  }

  const imports = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (csvFile){
      formData.append('file', csvFile);
     }

      fetchData(formData);
  }


  async function fetchData(data) {
    const headers2 =  { 
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    };
    const res = await axios.post(
      baseUrl+resource+'/import',
      data,
      {headers: headers2}
      ).then(response => {
        if(response.status == 200 ){
          toast.success('Nouveaux enregistrement !', {autoClose:3000})
          navigate(resource+"/list", { replace: true })
        }else{
          toast.error('Echec enregistrement !', {autoClose:3000})
        }
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
      
    }

  return (
    <CForm className='m-4 p-4' onSubmit={handleSubmit} noValidate validated={validated} >
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Fichier à importer
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="file" id="inputEmail3" required onChange={handleChange} />
            <CFormFeedback invalid>Fichier ne peut pas etre vide.</CFormFeedback>
        </CCol>
        </CRow>
        
        <CButton type="submit" disabled={showSpinButton} >
          {
            showSpinButton? (<CSpinner component="span" size="sm" aria-hidden="true" /> ) :
            (<CIcon icon={cilSave} /> )
          }
           Importer
        </CButton>
    </CForm>
  )
}
export default ImporForm;
