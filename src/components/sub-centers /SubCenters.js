import React from 'react'
import { CTableBody } from '@coreui/react'
import SubCenter from './SubCenter'

const SubCenters = ({ subCenters }) => {
  return (
    <CTableBody>
      {subCenters.map((subCenter, index) => (
        <SubCenter subCenter={subCenter} key={subCenter.id} inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default SubCenters
