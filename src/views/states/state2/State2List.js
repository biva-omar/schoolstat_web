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
import States1 from 'src/components/states/States1'
import States2 from 'src/components/states/States2'
import GeneratePDF from 'src/components/GeneratePDF'

const State2List = () => {
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
    const res = await fetch(baseUrl + '/students/state2/')
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
            <strong>Etat2</strong>
            <GeneratePDF object={list} />
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">sous centres</CTableHeaderCell>
                  <CTableHeaderCell scope="col">attendus</CTableHeaderCell>
                  <CTableHeaderCell scope="col">presents</CTableHeaderCell>
                  <CTableHeaderCell scope="col">abscents</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <States2 states={list} />
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default State2List
