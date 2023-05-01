import React from 'react'
import { CTableBody } from '@coreui/react'
import State2 from './State2'

const States2 = ({ states }) => {
  return (
    <CTableBody>
      {states.map((state, index) => (
        <State2 state={state} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default States2
