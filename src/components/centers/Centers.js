import React from 'react'
import { CTableBody } from '@coreui/react'
import Center from './Center'

const Centers = ({ centers }) => {
  return (
    <CTableBody>
      {centers.map((center) => (
        <Center center={center} key={center.id} />
      ))}
    </CTableBody>
  )
}

export default Centers
