import React, { useState } from 'react'

import { CButton, CFormInput, CFormSelect, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibCplusplus, cibEyeem, cilEyedropper, cilPencil, cilPlus, cilTrash, cilViewQuilt, cilViewStream, cilWatch } from '@coreui/icons'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl, headers } from 'src/AppConfig'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import ReactDatePicker from 'react-datepicker'

const Student = ({student, inc}) => {
  const navigate = useNavigate()
  const [persitedData, setPersistedData] = useState(student)
  const [showUpdate, setShowUpdate] = useState(false)
  const [firstname, setFirstname] = useState(student.firstname)
  const [lastname, setLastname] = useState(student.lastname)
  const [birthday, setBirthday] = useState(student.birthday)
  const [sex, setSex] = useState(student.sex)
  const [school, setSchool] = useState(student?.school)
  const [schools, setSchools] = useState([])

  const deleteItem = () => {
    
    axios.delete(baseUrl+"/students/"+student.id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Eleve supprime avec succes!', {autoClose:3000})
          
          navigate("/students/list", { replace: true })
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
    let postData = {firstname, lastname, birthday, sex, schoolId: student?.schoolId }

    axios.put(baseUrl+"/students/"+student.id, postData, {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          toast.success('Eleve modifie avec succes!', {autoClose:3000})
          setPersistedData(response.data)
          setSchool(response.data?.school)
          setShowUpdate(false)
          //navigate("/centers/list", { replace: true })
          //window.location.reload()
        }else{
          toast.error('Echec modification !', {autoClose:3000})
          setFirstname(persitedData.firstname)
          setLastname(persitedData.lastname)
          setBirthday(persitedData.birthday)
          setSex(persitedData.sex)
          setSchool(persitedData?.school)
        }
      }
    )
    .catch(error => {
      toast.error('Echec de modification !', {autoClose:3000})
      setFirstname(persitedData.firstname)
      setLastname(persitedData.lastname)
      setBirthday(persitedData.birthday)
      setSex(persitedData.sex)
      setSchool(persitedData?.school)
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
      fetchSchools()
    }else{
      setFirstname(persitedData.firstname)
      setLastname(persitedData.lastname)
      setBirthday(persitedData.birthday)
      setSex(persitedData.sex)
      setSchool(persitedData?.school)
    }
    setShowUpdate(!showUpdate)
  }

  const fetchSchools = () => {
    /*axios.get(baseUrl+"/schools", {headers: headers})

    .then(
      response => {
          
        if(response.status == 200 ){
          setSchools(response.data)
        }else{
          //toast.error('Echec modification !', {autoClose:3000})
        }
      }
    )
    .catch(error => {
      console.error('There was an error!', error);
  });*/
  }
  
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{inc}</CTableHeaderCell>
      <CTableDataCell style={{width: '18%'}}>
        {showUpdate? (<CFormInput size='sm'  value={firstname} onChange={(e) => setFirstname(e.target.value) } />): (<>{firstname}</>)}
      </CTableDataCell>
      <CTableDataCell style={{width: '18%'}}>
        {showUpdate? (<CFormInput size='sm'  value={lastname} onChange={(e) => setLastname(e.target.value) } />): (<>{lastname}</>)}
      </CTableDataCell>
      <CTableDataCell style={{width: '12%'}}>
        {showUpdate? 
        (
          <ReactDatePicker selected={birthday}
              showIcon
              placeholderText='DD/MM/YYYY'
              dateFormat='dd/MM/yyyy'
              onChange={(date) => setBirthday(date)} 
              calendarClassName='form-select sm'
              style={{width: '100px', height: '33px'}}
              
          />
        /*<CFormInput size='sm'  value={birthday} onChange={(e) => setBirthday(e.target.value) } />*/)
        : (<>{moment(birthday).format('DD/MM/YY')}</>)
        }
      </CTableDataCell>
      
      <CTableDataCell style={{width: '8%'}}>
        {showUpdate? 
        (
          <CFormSelect  size='sm' style={{height: '32px'}} value={sex} onChange={(e) => setSex(e.target.value)} required>
              <option  value={''}>Choose...</option>
              <option  value={'M'}>M</option>
              <option  value={'F'}>F</option>
          </CFormSelect>
        ) : (<>{sex}</>)}
      </CTableDataCell>
      
      <CTableDataCell style={{width: '17%'}}>
        {student.schoolLabel}
      </CTableDataCell>

      <CTableDataCell style={{width: '17%'}}>
      {
        showUpdate? (<><CButton color={'secondary'} size='sm' onClick={updateItem} >Modifier</CButton><CButton color={'default'} size='sm' onClick={switchUpdate}>Annuler</CButton></>) :
        (<>
          <CIcon icon={cilPlus} className='me-2' title='editer' onClick={() => navigate('/students/'+student.id)} />
          <CIcon icon={cilPencil} className='me-2' title='editer' onClick={switchUpdate} />
          <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} onClick={handleDelete} />
        </>)
      }
            
      </CTableDataCell>
    </CTableRow>
  )
}
export default Student
