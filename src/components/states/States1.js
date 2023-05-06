import React from 'react'
import State1 from './State1'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
const States1 = ({ states }) => {
  return (
    <CTable bordered >
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" rowSpan={2}>#</CTableHeaderCell>
          <CTableHeaderCell scope="col" rowSpan={2}>sous centres</CTableHeaderCell>
          <CTableHeaderCell scope="col" colSpan={3}>inscrits</CTableHeaderCell>
          <CTableHeaderCell scope="col" colSpan={3}>presents</CTableHeaderCell>
          <CTableHeaderCell scope="col" colSpan={3}>abscents</CTableHeaderCell>
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
      <CTableBody>
        {states.map((state, index) => (
          <State1 state={state} key={index}  inc={index+1} />
        ))}
      </CTableBody>
    </CTable>
  )
}

export default States1
