import React, { useState } from 'react'

import { CButton, CFormInput, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { baseUrl, headers } from 'src/AppConfig'
import { confirmAlert } from 'react-confirm-alert'

const Notation = ({notation, inc}) => {

  const navigate = useNavigate()

  const [persitedData, setPersistedData] = useState(notation)

  const [showUpdate, setShowUpdate] = useState(false)
  const [note, setNote] = useState(notation.note)
  const [appreciation, setAppreciation] = useState(notation.appreciation)
  const [matiere, setMatiere] = useState(notation.matiere)
  const [matieres, setMatieres] = useState([])

  const deleteItem = () => {
    
    axios.delete(baseUrl+"/notes/"+notation.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Note supprime avec succes!', {autoClose:3000})
          
          navigate("/notations/list", { replace: true })
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
    let postData = {note, appreciation, matiereId: matiere.id, studentId: notation.student.id}
    console.log(postData)
    axios.put(baseUrl+"/notes/"+notation.id, postData, {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Note modifie avec succes!', {autoClose:3000})
          setPersistedData(response.data)
          setNote(response.data.note)
          setAppreciation(response.data.appreciation)
          setShowUpdate(false)
          //navigate("/centers/list", { replace: true })
          //window.location.reload()
        }else{
          toast.error('Echec modification !', {autoClose:3000})
          setNote(persitedData.note)
          setAppreciation(persitedData.appreciation)
        }
      }
    )
    .catch(error => {
      toast.error('Echec de modification !', {autoClose:3000})
      setNote(persitedData.note)
      setAppreciation(persitedData.appreciation)
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
    if(!showUpdate){
      fetchMatieres()
    }else{
      setNote(persitedData.note)
      setAppreciation(persitedData.appreciation)
    }
    setShowUpdate(!showUpdate)
  }


  const fetchMatieres = () => {
    axios.get(baseUrl+"/matieres/", {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          setMatieres(response.data)
          console.log(response.data)
        }else{
          //toast.error('Echec modification !', {autoClose:3000})
        }
      }
    )
    .catch(error => {
      console.error('There was an error!', error);
  });
  }


  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell>{notation.studentFirstname + ' ' + notation.studentLastname}</CTableDataCell>
      <CTableDataCell>{notation.matiereLabel}</CTableDataCell>

      <CTableDataCell style={{width: '20%'}}>
        {showUpdate? (<CFormInput size='sm'  value={note} onChange={(e) => setNote(e.target.value) } />): (<>{note}</>)}
      </CTableDataCell>
      <CTableDataCell style={{width: '25%'}}>
        {showUpdate? (<CFormInput size='sm'  value={appreciation} onChange={(e) => setAppreciation(e.target.value) } />): (<>{appreciation}</>)}
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
export default Notation
