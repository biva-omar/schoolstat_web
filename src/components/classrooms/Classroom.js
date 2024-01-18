import React, { useState } from 'react'

import { CButton, CFormInput, CFormSelect, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from 'src/AppConfig'
import axios from 'axios'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

const Classroom = ({classroom, inc}) => {
  const navigate = useNavigate()

  const [persitedData, setPersistedData] = useState(classroom)

  const [showUpdate, setShowUpdate] = useState(false)
  const [newLabel, setNewLabel] = useState(classroom.label)
  const [newSubCenter, setNewSubCenter] = useState(classroom.examSubCenter)
  const [subCenters, setSubCenters] = useState([])

  const deleteItem = () => {
    
    axios.delete(baseUrl+"/exam-classrooms/"+classroom.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Salle supprime avec succes!', {autoClose:3000})
          
          navigate("/classrooms/list", { replace: true })
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
    let postData = {label: newLabel, examSubCenterId: newSubCenter.id}
   
    axios.put(baseUrl+"/exam-classrooms/"+classroom.id, postData, {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Centre modifie avec succes!', {autoClose:3000})
          setPersistedData(response.data)
          setNewSubCenter(response.data.examSubCenter)
          setShowUpdate(false)
          //navigate("/centers/list", { replace: true })
          //window.location.reload()
        }else{
          toast.error('Echec modification !', {autoClose:3000})
          setNewLabel(persitedData.label)
          setNewSubCenter(persitedData.examSubCenter)
        }
      }
    )
    .catch(error => {
      toast.error('Echec de modification !', {autoClose:3000})
      setNewSubCenter(classroom.examSubCenter)
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
      fetchSubCenters()
    }else{
      setNewLabel(persitedData.label)
      setNewSubCenter(persitedData.examSubCenter)
    }
    setShowUpdate(!showUpdate)
  }

  const fetchSubCenters = () => {
    axios.get(baseUrl+"/exam-sub-centers/", {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          setSubCenters(response.data)
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
      <CTableDataCell style={{width: '50%'}}>
        {showUpdate? (<CFormInput size='sm'  value={newLabel} onChange={(e) => setNewLabel(e.target.value) } />): (<>{newLabel}</>)}
      </CTableDataCell>
      <CTableDataCell style={{width: '30%'}}>
        {showUpdate? 
        (
          <CFormSelect size='sm' style={{height: '33px'}} value={newSubCenter.id} onChange={(e) => setNewSubCenter({id: e.target.value})} required>
              <option  value={''}>Choose...</option>
                    {
                      subCenters.map(
                        (subCenter, index) => (
                          <option key={index} value={subCenter.id}>{subCenter.label}</option>
                        )
                      )
                    }
          </CFormSelect>
        ) : (<>{newSubCenter.label}</>)}
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
export default Classroom

