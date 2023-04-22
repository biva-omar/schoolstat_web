import React from 'react'
import { CTableBody } from '@coreui/react'
import Classroom from './Classroom'

const Classrooms = ({classrooms}) => {
  return (
    <CTableBody>
      {classrooms.map((classroom) => (
        <Classroom classroom={classroom} key={classroom.id} />
      ))}
    </CTableBody>
  )
}

export default Classrooms
