import React from 'react'
import { CTableBody } from '@coreui/react'
import Student from './Student'

const Students = ({ students }) => {
  return (
    <CTableBody>
      {students?.map((student, index) => (
        <Student student={student} key={student.id} inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default Students
