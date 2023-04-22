import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const School = ({ school }) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{school.id}</CTableHeaderCell>
      <CTableDataCell>{school.label}</CTableDataCell>
      <CTableDataCell>{school.examSubCenter.label}</CTableDataCell>
      <CTableDataCell>{school.examSubCenter.examCenter.label}</CTableDataCell>
      <CTableDataCell>More Actions</CTableDataCell>
    </CTableRow>
  )
}
export default School
