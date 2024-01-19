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
import Notations from 'src/components/notations/Notations'
import { baseUrl, headers } from 'src/AppConfig'

const NotationList = () => {

  useEffect(() => {
    const getList = async () => {
      const listFromServer = await fetchList()
      setList(listFromServer)
    }

    getList()
  }, [])
  // Fetch Tasks from the fake json-rest-server
  const fetchList = async () => {
    const res = await fetch(baseUrl + '/notes/', {headers: headers})
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
            <Link to={'/notations/add'}>
              <CButton color="primary" size="sm" style={{float: 'right'}} >
                <CIcon icon={cilPlus} className='me-2' />
                Ajouter
              </CButton>
            </Link>
            <Link to={'/notes/import'}>
              <CButton color="secondary" size="sm me-2" style={{float: 'right'}} >
                <CIcon icon={cilPlus} className='me-2' />
                Importer
              </CButton>
            </Link>
          </CCardHeader>
          <CCardBody>
            <Notations notations={list.content} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default NotationList
