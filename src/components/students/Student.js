import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const Student = ({ student }) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{student.id}</CTableHeaderCell>
      <CTableDataCell>{student.firstname}</CTableDataCell>
      <CTableDataCell>{student.lastname}</CTableDataCell>
      <CTableDataCell>{student.birthday}</CTableDataCell>
      <CTableDataCell>{student.sex}</CTableDataCell>
      <CTableDataCell>More Actions</CTableDataCell>
    </CTableRow>
  )
}
export default Student
