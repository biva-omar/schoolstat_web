import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CRow, } from '@coreui/react'
import { toast } from 'react-toastify';
import axios from 'axios';

const SearchCenter = () => {

  const baseUrl ='http://localhost:8081';
  const [label, setLabel] = useState('')
  const [data, setData] = useState({label: ''})
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      search(label)
      //addCenter({label, })
      console.log(data)

    }
  }

  const search = (item) => {
    
   /* const res = fetch(baseUrl + '/exam-centers/' + item)
    .then(response => {
      const result = response.json();
      if(response.status === 200 ){
        toast.success('Element retrouvé !', {autoClose:3000})
        setData(result)
      }else{
        toast.error('Element introuvable !', {autoClose:3000})
      }
    })
    .catch( error => {
        this.setState({ errorMessage: error.toString() })
        console.error('There was an error!', error)
      }
    )

*/
    //**** */
    axios
      .get(baseUrl + '/exam-centers/' + item)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
 

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Rechercher un Centre d&apos;examen</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit} noValidate validated={validated}>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  Libelle
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="text" id="inputEmail3" value={label} onChange={(e) => setLabel(e.target.value)} required />
                  <CFormFeedback invalid>Le libelle ne peut pas etre vide.</CFormFeedback>
                </CCol>
              </CRow>
              <CButton type="submit">Rechercher</CButton>
            </CForm>
            <div style={{width: '400px', height: '400px', backgroundColor: '#eee'}}>
            <h1>{data.label}</h1>
            </div>
          </CCardBody>
        </CCard>
        
      </CCol>
      
    </CRow>
  )
}

export default SearchCenter
