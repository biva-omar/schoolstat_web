import React from 'react'
import { CTableBody } from '@coreui/react'
import State1 from './State1'

const States1 = ({ states }) => {
  return (
    <CTableBody>
      {states.map((state, index) => (
        <State1 state={state} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default States1
