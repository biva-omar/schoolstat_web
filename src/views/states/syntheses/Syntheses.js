import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow, } from '@coreui/react'
import { Link } from 'react-router-dom'

const Syntheses = () => {
  
  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Statistiques et Syntheses</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem><Link to="/state1">SYNTHESE DES RESULTATS DU CEP  SESSION 2023</Link></CListGroupItem>
              <CListGroupItem><Link to="/state2">SATATISTIQUES DES INTERVENANTS AU CEP SESSION 2023</Link></CListGroupItem>
              <CListGroupItem><Link to="/state3">SYNTHESE DES RESULTATS DU CEP PAR ORDRE D’ENSEIGNEMENT SESSION 2023</Link></CListGroupItem>
              <CListGroupItem><Link to="/state4">ANALYSE DES RESULTATS PAR DISCIPLINE AU CEP SESSION 2023</Link></CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Syntheses
