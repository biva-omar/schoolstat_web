import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const SubCenter = ({ subCenter }) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{subCenter.id}</CTableHeaderCell>
      <CTableDataCell>{subCenter.label}</CTableDataCell>
      <CTableDataCell>{subCenter.examCenter.label}</CTableDataCell>
      <CTableDataCell>More Actions</CTableDataCell>
    </CTableRow>
  )
}
export default SubCenter

