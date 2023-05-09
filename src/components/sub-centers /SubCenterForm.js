import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback, CFormSelect } from '@coreui/react'

const SubCenterForm = ({addSubCenter, centers}) => {
  
  const [validated, setValidated] = useState(false)
  const [label, setLabel] = useState('')
  const [center, setCenter] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      addSubCenter({label, examCenterId: center})

    }
    
  }


  return (
    <CForm onSubmit={handleSubmit} noValidate validated={validated} >
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Libelle
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={label} id="inputEmail3" onChange={(e) => setLabel(e.target.value)} required />
            <CFormFeedback invalid>Le libelle ne peut pas etre vide.</CFormFeedback>
        </CCol>
        </CRow>
        
        <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                  Centre d&apos;Examen
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={center}  onChange={(e) => setCenter(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    {
                      centers.map((center) => (
                        <option key={center.id} value={center.id}>{center.label}</option>
                      ))
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
        <CButton type="submit">Valider</CButton>
    </CForm>
  )
}

export default SubCenterForm
