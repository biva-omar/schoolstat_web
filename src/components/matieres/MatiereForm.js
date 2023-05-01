import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback } from '@coreui/react'

const MatiereForm = ({addMatiere}) => {
  
  const [validated, setValidated] = useState(false)
  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      addMatiere({label, })

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
        <CButton type="submit">Valider</CButton>
    </CForm>
  )
}

export default MatiereForm
