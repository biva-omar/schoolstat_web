import React from 'react'
import { CTableBody } from '@coreui/react'
import Center from './Matiere'
import Matiere from './Matiere'

const Matieres = ({ matieres }) => {
  return (
    <CTableBody>
      {matieres.map((matiere, index) => (
        <Matiere matiere={matiere} key={"1"}  inc={index+1} />
      ))}
    </CTableBody>
  )
}

export default Matieres
