import React from 'react'
import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import State2 from './State2'

const States2 = ({ states }) => {
  return (
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
      <CTableBody>
        {states.map((state, index) => (
          <State2 state={state} key={index}  inc={index+1} />
        ))}
      </CTableBody>
    </CTable>
  )
}

export default States2
