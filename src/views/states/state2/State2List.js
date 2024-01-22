import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import Centers from 'src/components/centers/Centers'
import Students from 'src/components/students/Students'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import States1 from 'src/components/states/States1'
import States2 from 'src/components/states/States2'
import GeneratePDF from 'src/components/GeneratePDF'
import { baseUrl, headers } from 'src/AppConfig'

const State2List = () => {
  
  useEffect(() => {
    const getList = async () => {
      const listFromServer = await fetchList()
      setList(listFromServer)
    }
    
    getList()
  }, [])
  // Fetch Tasks from the fake json-rest-server
  const fetchList = async () => {
    const res = await fetch(baseUrl + '/students/state2/', {headers:headers})
    const data = await res.json()
    return data
  }
  const [list, setList] = useState([])
  const examSession = localStorage.getItem("exam_session_label")
  console.log(list)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>SATATISTIQUES DES INTERVENANTS AU CEP <span>{examSession}</span></strong>
            <GeneratePDF object={list} state={'2'} />
          </CCardHeader>
          <CCardBody>
            <States2 states={list} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State2List