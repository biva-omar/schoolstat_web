import React from 'react'
import { CTableBody } from '@coreui/react'
import State1 from './State1'
import State4 from './State4'

const States4 = ({ states }) => {
  return (
    <CTableBody>
      {states.map((state, index) => (
        <State4 state={state} key={index}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default States4
