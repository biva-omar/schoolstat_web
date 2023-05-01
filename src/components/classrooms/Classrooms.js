import React from 'react'
import { CTableBody } from '@coreui/react'
import Classroom from './Classroom'

const Classrooms = ({classrooms}) => {
  return (
    <CTableBody>
      {classrooms.map((classroom, index) => (
        <Classroom classroom={classroom} key={classroom.id} inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default Classrooms
