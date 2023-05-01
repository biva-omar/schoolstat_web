import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEyedropper, cilPencil, cilPlus, cilTrash, cilViewStream } from '@coreui/icons'

const Center = ({ center, inc}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{center.label}</CTableDataCell>
      <CTableDataCell>
      <CIcon icon={cilPlus} className='me-2' title='voir plus' style={{color: '#0000ff'}} />
      <CIcon icon={cilPencil} className='me-2' title='editer' style={{color: '#00eeff'}} />
      <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} />
            
      </CTableDataCell>
    </CTableRow>
  )
}
export default Center
