import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import moment from 'moment'

const Student = ({student, inc}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{student.firstname}</CTableDataCell>
      <CTableDataCell>{student.lastname}</CTableDataCell>
      <CTableDataCell>{ moment(student.birthday).format('MMMM Do YYYY')}</CTableDataCell>
      <CTableDataCell>{student.sex}</CTableDataCell>
      <CTableDataCell>{student.schoolLabel}</CTableDataCell>
      <CTableDataCell>
        <CIcon icon={cilPlus} className='me-2' title='voir plus' style={{color: '#0000ff'}} />
        <CIcon icon={cilPencil} className='me-2' title='editer' style={{color: '#00eeff'}} />
        <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} />
      </CTableDataCell>
    </CTableRow>
  )
}
export default Student
