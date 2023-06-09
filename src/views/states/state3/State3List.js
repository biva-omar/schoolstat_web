import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import States3 from 'src/components/states/States3'
import GeneratePDF from 'src/components/GeneratePDF'
import { headers } from 'src/AppConfig'

const State3List = () => {
  const baseUrl = 'http://localhost:8081'
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
  console.log(list)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Etat3</strong>
            <GeneratePDF object={list} state={'3'} />
          </CCardHeader>
          <CCardBody>
            <States3 states={list} />   
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State3List
