import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const Center = ({ center }) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{center.id}</CTableHeaderCell>
      <CTableDataCell>{center.label}</CTableDataCell>
      <CTableDataCell>More Actions</CTableDataCell>
    </CTableRow>
  )
}
export default Center
