import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import States1 from 'src/components/states/States1'
import GeneratePDF from 'src/components/GeneratePDF'
import { baseUrl, headers } from 'src/AppConfig'

const State1List = () => {
  
  useEffect(() => {
    const getList = async () => {
      const listFromServer = await fetchList()
      setList(listFromServer)
    }

    getList()
  }, [])
  // Fetch Tasks from the fake json-rest-server
  const fetchList = async () => {
    const res = await fetch(baseUrl + '/students/state1/', {headers: headers})
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
            <strong>SYNTHESE DES RESULTATS DU CEP  <span>{examSession}</span></strong>
            <GeneratePDF object={list} />
          </CCardHeader>
          <CCardBody>
            <States1 states={list} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State1List
