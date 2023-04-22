import React from 'react'
import { CTableBody } from '@coreui/react'
import School from './School'

const Schools = ({ schools }) => {
  return (
    <CTableBody>
      {schools.map((school) => (
        <School school={school} key={school.id} />
      ))}
    </CTableBody>
  )
}

export default Schools
