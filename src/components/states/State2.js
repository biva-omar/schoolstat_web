import React from 'react'

import { CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'

const State2 = ({ state, inc}) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{state.sousCentre}</CTableDataCell>
      <CTableDataCell>{state.inscrit}</CTableDataCell>
      <CTableDataCell>{state.present}</CTableDataCell>
      <CTableDataCell>{state.inscrit - state.present}</CTableDataCell>
    </CTableRow>
  )
}
export default State2
