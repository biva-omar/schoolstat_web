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
import { Link } from 'react-router-dom'

const StudentList = () => {
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
    const res = await fetch(baseUrl + '/students/')
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
            <strong>Liste d&apos;Eleves</strong>
            <Link to={'/students/add'}>
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
                  <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Prenoms</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date de Naissance</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sexe</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Etablissement</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <Students students={list} />
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StudentList
