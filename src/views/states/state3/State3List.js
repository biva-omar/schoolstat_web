import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import Centers from 'src/components/centers/Centers'
import Students from 'src/components/students/Students'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import States3 from 'src/components/states/States3'
import GeneratePDF from 'src/components/GeneratePDF'

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
    const res = await fetch(baseUrl + '/students/state3/')
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
            <GeneratePDF object={list} />
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" rowSpan={2}>#</CTableHeaderCell>
                  <CTableHeaderCell scope="col" rowSpan={2}>ordre enseignement</CTableHeaderCell>
                  <CTableHeaderCell scope="col" colSpan={3}>inscrits</CTableHeaderCell>
                  <CTableHeaderCell scope="col" colSpan={3}>presents</CTableHeaderCell>
                  <CTableHeaderCell scope="col" colSpan={3}>admis</CTableHeaderCell>
                  <CTableHeaderCell scope="col" colSpan={3}>%</CTableHeaderCell>
                </CTableRow>
                <CTableRow>
                  
                  <CTableHeaderCell scope="col">G</CTableHeaderCell>
                  <CTableHeaderCell scope="col">F</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                  <CTableHeaderCell scope="col">G</CTableHeaderCell>
                  <CTableHeaderCell scope="col">F</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                  <CTableHeaderCell scope="col">G</CTableHeaderCell>
                  <CTableHeaderCell scope="col">F</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                  <CTableHeaderCell scope="col">G</CTableHeaderCell>
                  <CTableHeaderCell scope="col">F</CTableHeaderCell>
                  <CTableHeaderCell scope="col">T</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <States3 states={list} />
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State3List
