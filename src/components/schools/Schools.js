import React from 'react'
import { CTableBody } from '@coreui/react'
import School from './School'

const Schools = ({ schools }) => {
  return (
    <CTableBody>
      {schools.map((school, index) => (
        <School school={school} key={school.id} inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default Schools
