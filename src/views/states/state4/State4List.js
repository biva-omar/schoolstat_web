import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import GeneratePDF from 'src/components/GeneratePDF'
import States4 from 'src/components/states/States4'
import { baseUrl, headers } from 'src/AppConfig'

const State4List = () => {
  
  useEffect(() => {
    const getList = async () => {
      const listFromServer = await fetchList()
      setList(listFromServer)
    }

    getList()
  }, [])
  // Fetch Tasks from the fake json-rest-server
  const fetchList = async () => {
    const res = await fetch(baseUrl + '/students/state3/', {headers: headers})
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
            <strong>ANALYSE DES RESULTATS PAR DISCIPLINE AU CEP SESSION <span>{examSession}</span></strong>
            <GeneratePDF object={list} state={'4'} />
          </CCardHeader>
          <CCardBody>
            <States4 states={list} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State4List