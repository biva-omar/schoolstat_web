import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { headers } from 'src/AppConfig';
import Student from 'src/components/students/Student';
import StudentDetails from '../students/details/StudentDetails';
import { cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const SearchStudent = ({url, title}) => {

  const [label, setLabel] = useState('')
  const [data, setData] = useState()
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

    }
  }

  const search = (item) => {
    
    axios
      .get(url+item, {headers: headers})
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setData(null);
      });
  }
 

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{title}</strong>

            <CForm style={{float: 'right', marginBottom: '-22px', marginTop: '-5px'}}
                  onSubmit={handleSubmit} 
                  noValidate 
                  validated={validated}
            >
            <CInputGroup className="mb-3">
                      
                      <CFormInput 
                        placeholder="Search..." 
                        autoComplete="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)} 
                        required
                      />
                      <CButton type="submit" className='btn'><CIcon icon={cilSearch} /></CButton>
                      <CFormFeedback invalid>Username ne peut pas etre vide.</CFormFeedback>
                    </CInputGroup>
            </CForm>
          </CCardHeader>
          <CCardBody>
            

            {
              data? (<StudentDetails student={data} />) : (<></>)
            }
            
          </CCardBody>
        </CCard>
        
      </CCol>
      
    </CRow>
  )
}

export default SearchStudent
