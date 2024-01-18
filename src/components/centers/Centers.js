import React from 'react'
import { CTableBody } from '@coreui/react'
import Center from './Center'

const Centers = ({ centers }) => {
  
  return (
    <CTableBody>
      {centers.map((center, index) => (
        <Center center={center} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default Centers
