import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CRow, } from '@coreui/react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Search from 'src/views/common/Search';

const SearchCenter = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/exam-centers/'
  const title = 'Rechercher un centre'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchCenter
