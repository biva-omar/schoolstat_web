import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const State4 = ({ state, inc}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{state.sousCentre}</CTableDataCell>
      <CTableDataCell>{state.inscritM}</CTableDataCell>
      <CTableDataCell>{state.inscritF}</CTableDataCell>
      <CTableDataCell>{state.inscritM + state.inscritF}</CTableDataCell>
      <CTableDataCell>{state.presentM}</CTableDataCell>
      <CTableDataCell>{state.presentF}</CTableDataCell>
      <CTableDataCell>{state.presentM + state.presentF}</CTableDataCell>
      <CTableDataCell>{state.inscritM - state.presentM}</CTableDataCell>
      <CTableDataCell>{state.inscritF - state.presentF}</CTableDataCell>
      <CTableDataCell>{(state.inscritM+state.inscritF) - state.presentM - state.presentF}</CTableDataCell>
      <CTableDataCell style={{maxWidth: '16px', overflow: 'hidden'}}>{state.presentM*100/state.inscritM}</CTableDataCell>
      <CTableDataCell style={{maxWidth: '16px', overflow: 'hidden'}}>{state.presentF*100/state.inscritF}</CTableDataCell>
      <CTableDataCell style={{maxWidth: '16px', overflow: 'hidden'}}>{(state.presentM + state.presentF)*100/(state.inscritM+state.inscritF)}</CTableDataCell>
    </CTableRow>
  )
}
export default State4
