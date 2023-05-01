import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback, CFormSelect } from '@coreui/react'

const StudentForm = ({addStudent, schools}) => {
  
  const [validated, setValidated] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')
  const [birthday, setBirthday] = useState('')
  const [sex, setSex] = useState('')
  const [school, setSchool] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      addStudent({firstname, lastname, birthday, sex, schoolId: school})

    }
    
  }

  return (
    <CForm onSubmit={handleSubmit} noValidate validated={validated} >
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Nom
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={firstname} id="inputEmail3" onChange={(e) => setFirstname(e.target.value)} required />
            <CFormFeedback invalid>Nom ne peut pas etre vide.</CFormFeedback>
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="lastname" className="col-sm-2 col-form-label">
            Prénoms
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={lastname} id="lastname" onChange={(e) => setLastname(e.target.value)} required />
            <CFormFeedback invalid>lastname ne peut pas etre vide.</CFormFeedback>
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Date de Naissance
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={description} id="inputPassword3" onChange={(e) => setDescription(e.target.value)} />
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="ldn" className="col-sm-2 col-form-label">
            Lieu de Naissance
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={description} id="ldn" onChange={(e) => setDescription(e.target.value)} />
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="ntuteur" className="col-sm-2 col-form-label">
            Téléphone du Tuteur
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={description} id="ntuteur" onChange={(e) => setDescription(e.target.value)} />
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Genre
        </CFormLabel>
        <CCol sm={10}>
            <CFormSelect id="inlineFormSelectPref" value={sex} onChange={(e) => setSex(e.target.value)} required>
            <option value={''}>Choose...</option>
            <option value={'M'}>Masculin</option>
            <option value={'F'}>Feminin</option>
            </CFormSelect>
        </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Etablissement
        </CFormLabel>
        <CCol sm={10}>
            <CFormSelect id="inlineFormSelectPref" value={school} onChange={(e) => setSchool(e.target.value)} required>
            <option value={''}>Choose...</option>
            {
                schools.map(
                    school => (
                        <option key={school.id} value={school.id}>{school.label}</option>
                    )
                )
            }
            </CFormSelect>
        </CCol>
        </CRow>
        <CButton type="submit">Valider</CButton>
    </CForm>
  )
}

export default StudentForm
