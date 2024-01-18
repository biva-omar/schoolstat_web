import React, { useState } from 'react'

import { CButton, CFormInput, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEyedropper, cilPencil, cilPlus, cilTrash, cilViewStream } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from 'src/AppConfig'
import { toast } from 'react-toastify'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'

const Matiere = ({ matiere, inc}) => {

  const navigate = useNavigate()
  const [showUpdate, setShowUpdate] = useState(false)
  const [persitedData, setPersistedData] = useState(matiere)
  const [newLabel, setNewLabel] = useState(matiere.label)

  const deleteItem = () => {
    axios.delete(baseUrl+"/matieres/"+matiere.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Matiere supprime avec succes!', {autoClose:3000})
          
          navigate("/matieres/list", { replace: true })
          window.location.reload()
        }else{
          toast.error('Echec de suppression !', {autoClose:3000})
        }
      }
    )
    .catch(error => {
      toast.error('Echec de suppression !', {autoClose:3000})
      console.error('There was an error!', error);
  });
  }


  const updateItem = () => {
    let postData = {label: newLabel}
    axios.put(baseUrl+"/matieres/"+matiere.id, postData, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Matiere modifie avec succes!', {autoClose:3000})
          setPersistedData(response.data)
          setShowUpdate(false)
          //navigate("/centers/list", { replace: true })
          //window.location.reload()
        }else{
          toast.error('Echec modification !', {autoClose:3000})
          setNewLabel(persitedData.label)
        }
      }
    )
    .catch(error => {
      toast.error('Echec de modification !', {autoClose:3000})
      setNewLabel(persitedData.label)
      console.error('There was an error!', error);
  });
  }


  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {deleteItem(); },
          style: {backgroundColor: 'red'}
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };


  const switchUpdate = () => {
    if(showUpdate){
      setNewLabel(persitedData.label)
    }
    setShowUpdate(!showUpdate)
  }


  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell style={{width: '80%'}}>
        {showUpdate? (<CFormInput size='sm'  value={newLabel} onChange={(e) => setNewLabel(e.target.value) } />): (<>{newLabel}</>)}
      </CTableDataCell>
      <CTableDataCell style={{width: '20%'}}>
      {
        showUpdate? (<><CButton color={'secondary'} size='sm' onClick={updateItem} >Modifier</CButton><CButton color={'default'} size='sm' onClick={switchUpdate}>Annuler</CButton></>) :
        (<>
          <CIcon icon={cilPencil} className='me-2' title='editer' onClick={switchUpdate} />
          <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} onClick={handleDelete} />
        </>)
      }
            
      </CTableDataCell>
    </CTableRow>
  )
}
export default Matiere
