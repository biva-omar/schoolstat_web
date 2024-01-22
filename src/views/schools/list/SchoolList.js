import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
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
import { baseUrl, headers } from 'src/AppConfig'

const SchoolList = () => {

  const [list, setList] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const getList = async (currentPage) => {
    const listFromServer = await fetchList(currentPage)
    setList(listFromServer)
  }
  
  useEffect(() => {
    

    getList(currentPage)
  }, [])
  // Fetch Tasks from the fake json-rest-server
  const fetchList = async (currentPage) => {
    const res = await fetch(baseUrl + '/schools/?size=50&page='+currentPage, {headers: headers})
    const data = await res.json()
    return data
  }

  const getPaginationContent = (length, current) => {
    let content = [];
    for (let i = 0; i < length; i++) {
      content.push(<CPaginationItem onClick={() =>{setCurrentPage(i); getList(i);} } active={i==current} key={i}>{i+1}</CPaginationItem>);
    }
    return content;
  };

  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liste d&apos;Etablissements</strong>
            <Link to={'/schools/add'}>
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
              <Schools schools={list?.content} />
            </CTable>
            {(list?.totalPages > 1)? <>
              <CPagination aria-label="Page navigation example">
              <CPaginationItem aria-label="Previous" disabled={list?.first}>
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              {getPaginationContent(list?.totalPages, currentPage)}
              <CPaginationItem aria-label="Next" disabled={list?.last}>
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
            </>: <></> }
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SchoolList
