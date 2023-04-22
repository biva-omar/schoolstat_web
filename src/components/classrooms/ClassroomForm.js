import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback, CFormSelect } from '@coreui/react'

const ClassroomForm = ({addClassroom}) => {
  
  const [validated, setValidated] = useState(false)
  const [label, setLabel] = useState('')
  const [subCenter, setSubCenter] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      addClassroom({label, examSubCenterId: subCenter})

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
            Description
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={description} id="inputPassword3" onChange={(e) => setDescription(e.target.value)} />
        </CCol>
        </CRow>
        <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                  sous centre
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={subCenter} onChange={(e) => setSubCenter(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
              </CRow>
        <CButton type="submit">Valider</CButton>
    </CForm>
  )
}

export default ClassroomForm
