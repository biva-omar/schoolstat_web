import React from 'react'
import { CTableBody } from '@coreui/react'
import State1 from './State1'
import State3 from './State3'

const States3 = ({ states }) => {
  return (
    <CTableBody>
      {states.map((state, index) => (
        <State3 state={state} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default States3
