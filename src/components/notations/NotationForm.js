import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback, CFormSelect } from '@coreui/react'
import AddNotation from 'src/views/notations/add/AddNotation'

const NotationForm = ({addNotation, matieres, students}) => {
  
  const [validated, setValidated] = useState(false)
  const [student, setStudent] = useState('')
  const [matiere, setMatiere] = useState('')
  const [note, setNote] = useState('')
  const [appreciation, setAppreciation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
        const form = event.currentTarget
        setValidated(true)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      addNotation({note, studentId: student,matiereId: matiere, appreciation})

    }
    
  }

  return (
    <CForm onSubmit={handleSubmit} noValidate validated={validated} >
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Note
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={note} id="inputEmail3" onChange={(e) => setNote(e.target.value)} required />
            <CFormFeedback invalid>Note ne peut pas etre vide.</CFormFeedback>
        </CCol>
        </CRow>
        
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Appreciation
        </CFormLabel>
        <CCol sm={10}>
            <CFormInput type="text" value={appreciation} id="inputEmail3" onChange={(e) => setAppreciation(e.target.value)} />
        </CCol>
        </CRow>

        <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                  Eleve
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={student} onChange={(e) => setStudent(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    {
                      students.map(
                        (student, index) => (
                          <option key={index} value={student.id}>{student.firstname + ' ' + student.lastname}</option>
                        )
                      )
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                  Matiere
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={matiere} onChange={(e) => setMatiere(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    {
                      matieres.map(
                        (matiere, index) => (
                          <option key={index} value={matiere.id}>{matiere.label}</option>
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

export default NotationForm
