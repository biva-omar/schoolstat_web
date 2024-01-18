import React, { useState } from 'react'

import { CButton, CFormInput, CFormSelect, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from 'src/AppConfig'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify'

const SubCenter = ({subCenter, inc}) => {

  const navigate = useNavigate()

  const [persitedData, setPersistedData] = useState(subCenter)

  const [showUpdate, setShowUpdate] = useState(false)
  const [newLabel, setNewLabel] = useState(subCenter.label)
  const [newCenter, setNewCenter] = useState(subCenter.examCenter)
  const [centers, setCenters] = useState([])

  const deleteItem = () => {
    
    axios.delete(baseUrl+"/exam-sub-centers/"+subCenter.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Sous centre supprime avec succes!', {autoClose:3000})
          
          navigate("/subcenters/list", { replace: true })
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
    let postData = {label: newLabel, examCenterId: newCenter.id}
    console.log(postData)
    axios.put(baseUrl+"/exam-sub-centers/"+subCenter.id, postData, {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Centre modifie avec succes!', {autoClose:3000})
          setPersistedData(response.data)
          setNewCenter(response.data.examCenter)
          setShowUpdate(false)
          //navigate("/centers/list", { replace: true })
          //window.location.reload()
        }else{
          toast.error('Echec modification !', {autoClose:3000})
          setNewLabel(subCenter.label)
          setNewCenter(subCenter.examCenter)
        }
      }
    )
    .catch(error => {
      toast.error('Echec de modification !', {autoClose:3000})
      setNewLabel(persitedData.label)
      setNewCenter(persitedData.examCenter)
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
      fetchCenters()
    }else{
      setNewLabel(persitedData.label)
      setNewCenter(persitedData.examCenter)
    }
    setShowUpdate(!showUpdate)
  }

  const fetchCenters = () => {
    axios.get(baseUrl+"/exam-centers/", {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          setCenters(response.data)
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
          <CFormSelect size='sm' style={{height: '33px'}} id="inlineFormSelectPref" value={newCenter.id} onChange={(e) => setNewCenter({id: e.target.value})} required>
              <option  value={''}>Choose...</option>
                    {
                      centers.map(
                        (center, index) => (
                          <option key={index} value={center.id}>{center.label}</option>
                        )
                      )
                    }
          </CFormSelect>
        ) : (<>{newCenter.label}</>)}
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
export default SubCenter

