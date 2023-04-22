import React from 'react'
import { CTableBody } from '@coreui/react'
import Student from './Student'

const Students = ({ students }) => {
  return (
    <CTableBody>
      {students.map((student) => (
        <Student student={student} key={student.id} />
      ))}
    </CTableBody>
  )
}

export default Students
