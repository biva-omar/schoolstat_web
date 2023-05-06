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
import Centers from 'src/components/centers/Centers'
import Schools from 'src/components/schools/Schools'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import { Link } from 'react-router-dom'

const NoteList = () => {
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
    const res = await fetch(baseUrl + '/schools/')
    const data = await res.json()
    return data
  }
  const [list, setList] = useState([])
 
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Les Notes des eleves</strong>
            <Link to={'/notes/add'}>
              <CButton color="primary" size="sm" style={{float: 'right'}} >
                <CIcon icon={cilPlus} className='me-2' />
                Ajouter
              </CButton>
            </Link>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Etablissements</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sous Centres</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Centres</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Odre enseignement</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <Schools notes={list} />
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default NoteList
