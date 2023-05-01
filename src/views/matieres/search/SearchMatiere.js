import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CRow, } from '@coreui/react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Search from 'src/views/common/Search';

const SearchMatiere = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/matieres/'
  const title = 'Rechercher une matiere'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchMatiere
