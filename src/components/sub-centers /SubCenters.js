import React from 'react'
import { CTableBody } from '@coreui/react'
import SubCenter from './SubCenter'

const SubCenters = ({ subCenters }) => {
  return (
    <CTableBody>
      {subCenters.map((subCenter) => (
        <SubCenter subCenter={subCenter} key={subCenter.id} />
      ))}
    </CTableBody>
  )
}

export default SubCenters
