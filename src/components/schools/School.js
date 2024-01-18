import React, { useState } from 'react'

import { CButton, CFormInput, CFormSelect, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from 'src/AppConfig'
import axios from 'axios'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

const School = ({school, inc}) => {

  const navigate = useNavigate()
  const [persitedData, setPersistedData] = useState(school)
  const [showUpdate, setShowUpdate] = useState(false)
  const [newLabel, setNewLabel] = useState(school.label)
  const [newCenter, setNewCenter] = useState(school.examCenter)
  const [centers, setCenters] = useState([])

  const [newSubCenter, setNewSubCenter] = useState(school.examSubCenter)
  const [subCenters, setSubCenters] = useState([])

  const [newOrder, setNewOrder] = useState({label: school.teachingOrder})
  const [orders, setOrders] = useState([])

  const deleteItem = () => {
    
    axios.delete(baseUrl+"/schools/"+school.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Ecole supprime avec succes!', {autoClose:3000})
          
          navigate("/schools/list", { replace: true })
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
    let postData = {label: newLabel, examSubCenterId: newSubCenter.id, teachingOrder: newOrder.label}
    console.log(postData)
    axios.put(baseUrl+"/schools/"+school.id, postData, {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Ecole modifie avec succes!', {autoClose:3000})
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
      setNewLabel(persitedData.label)
      setNewSubCenter(persitedData.examSubCenter)
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
      fetchOders()
    }else{
      setNewLabel(persitedData.label)
      setNewSubCenter(persitedData.examSubCenter)
      setNewOrder({label: persitedData.teachingOrder})
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


  const fetchOders = () => {
    axios.get(baseUrl+"/teaching-order/", {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          setOrders(response.data)
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
      <CTableDataCell style={{width: '25%'}}>
        {showUpdate? (<CFormInput size='sm'  value={newLabel} onChange={(e) => setNewLabel(e.target.value) } />): (<>{newLabel}</>)}
      </CTableDataCell>
      
      <CTableDataCell style={{width: '17%'}}>
        {showUpdate? 
        (
          <CFormSelect  size='sm' style={{height: '33px'}} value={newSubCenter.id} onChange={(e) => setNewSubCenter({id: e.target.value })} required>
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

      <CTableDataCell>{newSubCenter?.examCenter?.label}</CTableDataCell>
      
      <CTableDataCell style={{width: '20%'}}>
        {showUpdate? 
        (
          <CFormSelect  size='sm' style={{height: '33px'}} value={newOrder?.label} onChange={(e) => setNewOrder({label: e.target.value})} required>
              <option  value={''}>Choose...</option>
                    {
                      orders.map(
                        (order, index) => (
                          <option key={index} value={order.label}>{order.label}</option>
                        )
                      )
                    }
          </CFormSelect>
        ) : (<>{newOrder?.label}</>)}
      </CTableDataCell>
      
      <CTableDataCell style={{width: '17%'}}>
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
export default School
