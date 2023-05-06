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
import { headers } from 'src/AppConfig'

const State4List = () => {
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
            <strong>Etat4</strong>
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
