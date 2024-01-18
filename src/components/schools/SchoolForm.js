import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow, CFormFeedback, CFormSelect, CSpinner } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSave } from '@coreui/icons'

const SchoolForm = ({addSchool, subCenters, ordres}) => {
  
  const [validated, setValidated] = useState(false)
  const [label, setLabel] = useState('')
  const [subCenter, setSubCenter] = useState('')
  const [ordre, setOrdre] = useState('')
  const [showSpinButton, setShowSpinButton] = useState(false)

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
      setShowSpinButton( await addSchool({label, examSubCenterId: subCenter, teachingOrder: ordre}))

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
                  sous centre
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={subCenter} onChange={(e) => setSubCenter(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    {
                      subCenters.map(
                        (subCenter, index) => (
                          <option key={index} value={subCenter.id}>{subCenter.label}</option>
                        )
                      )
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                  Ordre enseignement
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect id="inlineFormSelectPref" value={ordre} onChange={(e) => setOrdre(e.target.value)} required>
                    <option value={''}>Choose...</option>
                    {
                      ordres.map(
                        (ordre, index) => (
                          <option key={index} value={ordre.label}>{ordre.label}</option>
                        )
                      )
                    }
                  </CFormSelect>
                </CCol>
              </CRow>
              <CButton type="submit" disabled={showSpinButton} >
                {
                  showSpinButton? (<CSpinner component="span" size="sm" aria-hidden="true" /> ) :
                  (<CIcon icon={cilSave} /> )
                }
                Enregistrer
              </CButton>
    </CForm>
  )
}

export default SchoolForm
