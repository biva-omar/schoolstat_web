import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const Classroom = ({classroom}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{classroom.id}</CTableHeaderCell>
      <CTableDataCell>{classroom.label}</CTableDataCell>
      <CTableDataCell>{classroom.examSubCenter.label}</CTableDataCell>
      <CTableDataCell>More Actions</CTableDataCell>
    </CTableRow>
  )
}
export default Classroom

