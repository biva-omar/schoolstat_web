import React from 'react'
import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import State3 from './State3'

const States3 = ({ states }) => {
  return (
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
    <CTableBody>
      {states.map((state, index) => (
        <State3 state={state} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  </CTable>
  )
}

export default States3
