import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'

const School = ({school, inc}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{school.label}</CTableDataCell>
      <CTableDataCell>{school.examSubCenter.label}</CTableDataCell>
      <CTableDataCell>{school.examSubCenter.examCenter.label}</CTableDataCell>
      <CTableDataCell>{school.teachingOrder}</CTableDataCell>
      <CTableDataCell>
        <CIcon icon={cilPlus} className='me-2' title='voir plus' style={{color: '#0000ff'}} />
        <CIcon icon={cilPencil} className='me-2' title='editer' style={{color: '#00eeff'}} />
        <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} />
      </CTableDataCell>
    </CTableRow>
  )
}
export default School
