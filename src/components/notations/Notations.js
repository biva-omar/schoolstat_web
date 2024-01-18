import React from 'react'
import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import Notation from './Notation'

const Notations = ({ notations }) => {
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Eleves</CTableHeaderCell>
          <CTableHeaderCell scope="col">Matieres</CTableHeaderCell>
          <CTableHeaderCell scope="col">Note</CTableHeaderCell>
          <CTableHeaderCell scope="col">appreciation</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {notations.map((notation, index) => (
          <Notation notation={notation} key={notation.id} inc={index+1} />
        ))}
      </CTableBody>   
    </CTable>
    
  )
}

export default Notations
