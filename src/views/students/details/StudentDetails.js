import { cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import moment from 'moment'
import React, { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl, headers } from 'src/AppConfig'

function StudentDetails({student}) {

  const [matiereId, setMatiereId] = useState()
  const [note, setNote] = useState()
  const [appreciation, setAppreciation] = useState()
  const [studentId, setStudendId] = useState()

  const [notations, setNotations] = useState(student.notes)
  
  const [matieres, setMatieres] = useState([])
  const [showAdd, setShowAdd] = useState(true)

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

  const addItem = async () => {
    let postData = {matiereId, note, appreciation, studentId: student.id}
    
     await axios.post(baseUrl+"/notes/", postData, {headers: headers})
      .then(
      response => {
          
        if(response.status == 200 ){
          setNotations([...notations, response.data ])
          setMatiereId('')
          setNote('')
          setAppreciation('')
          toast.success('Note ajoute avec succes!', {autoClose:2000})
        }else{
          toast.error('Echec ajout !', {autoClose:2000})
        }
      }
    )
    .catch(error => {
      toast.error('Echec ajout !', {autoClose:2000})
      console.error('There was an error!', error);
  });
  }


  const deleteItem = async (id) => {
    
    await axios.delete(baseUrl+"/notes/"+id, {headers: headers})
    .then(
      response => {
          
        if(response.status == 200 ){
          
          toast.success('Note supprime avec succes!', {autoClose:2000})
          setNotations(notations.filter((notation) => notation.id !== id))
        }else{
          toast.error('Echec de suppression !', {autoClose:2000})
        }
      }
    )
    .catch(error => {
      toast.error('Echec de suppression !', {autoClose:2000})
      console.error('There was an error!', error);
  });
  }

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {deleteItem(id); },
          style: {backgroundColor: 'red'}
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };


 
  const switchAdd = () => {
    if(!showAdd){
      
    }else{
        fetchMatieres()
    }
    setShowAdd(!showAdd)
}

  return (
    <>
        <CRow>
        <CCol xs={6}>
            <CCard className="mb-4">
            <CCardHeader>
                <strong>Informations Personnelles</strong>     
            </CCardHeader>
            <CCardBody>
                <CTable>

                    <CTableRow>
                        <CTableHeaderCell scope="row">Nom: </CTableHeaderCell>
                        <CTableDataCell>{student.firstname }</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Prenom: </CTableHeaderCell>
                        <CTableDataCell>{student.lastname }</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Date de Naissance: </CTableHeaderCell>
                        <CTableDataCell>{moment(student.birthday).format('MMMM Do YYYY')}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Lieu de Naissance: </CTableHeaderCell>
                        <CTableDataCell>{ student.birthplace }</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Sexe: </CTableHeaderCell>
                        <CTableDataCell>{student.sex }</CTableDataCell>
                    </CTableRow>
                </CTable>
            </CCardBody>
            </CCard>
        </CCol>

        <CCol xs={6}>
            <CCard className="mb-4">
            <CCardHeader>
                <strong>Autres Informations</strong>     
            </CCardHeader>
            <CCardBody>
                <CTable>
                <CTableRow>
                        <CTableHeaderCell scope="row">Contact du tuteur: </CTableHeaderCell>
                        <CTableDataCell>{student.tutor }</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Ecole: </CTableHeaderCell>
                        <CTableDataCell>{student.school.label }</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Sous centre: </CTableHeaderCell>
                        <CTableDataCell>{student.school.examSubCenter.label}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">Salle: </CTableHeaderCell>
                        <CTableDataCell>{ student.classroomLabel }</CTableDataCell>
                    </CTableRow>
                    
                </CTable>
            </CCardBody>
            </CCard>
        </CCol>
        </CRow>


        <CRow>
        <CCol xs={6}>
            <CCard className="mb-4">
            <CCardHeader>
                <strong>Presence de l&apos;eleve</strong>    
                <CButton color="primary" size="sm" style={{float: 'right'}} >
                        <CIcon icon={cilPlus} className='me-2' />
                        Ajouter
                </CButton> 
            </CCardHeader>
            <CCardBody>
                <CTable>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Matieres</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                


                </CTable>
            </CCardBody>
            </CCard>
        </CCol>

        <CCol xs={6}>
            <CCard className="mb-4">
            <CCardHeader>
                <strong>Notes de l&apos;eleve</strong>   
            </CCardHeader>
            <CCardBody>
                <CTable>
                    <CTableBody>
                
                    {
                        notations.map(
                            (note, index) => ( 
                                <CNote notation={note} onDelete={handleDelete} key={note.id} />

                            )
                        )
                        
                    }
                    <CTableRow>
                        {!showAdd? 
                            (<CNoteForm 
                                    matieres={matieres} 
                                    matiereId={matiereId} 
                                    setMatiereId={setMatiereId}
                                    note={note}
                                    setNote={setNote}
                                    appreciation={appreciation}
                                    setAppreciation={setAppreciation}
                            />): <></>}
                        <CTableDataCell colSpan={showAdd? 4: 0} style={{width: '40%', textAlign: 'right'}}>
                            {
                                showAdd? (
                                    <CButton onClick={switchAdd} color="primary" size="sm" style={{float: 'right'}} >
                                        <CIcon icon={cilPlus} className='me-2' size='sm' />
                                        <small>Ajouter</small>
                                    </CButton>
                                ):
                                (<>
                                    <CButton onClick={(e)=>addItem(matiereId, note, appreciation)} color={'primary'} size='sm' >
                                        <small>Ajouter</small>
                                    </CButton>
                                    <CButton onClick={switchAdd} color={'default'} size='sm' style={{float: 'right'}}>
                                        <small>Annuler</small>
                                    </CButton>
                                </>)
                                    


                            }
                        </CTableDataCell>
                    </CTableRow>
                   </CTableBody> 
                
                


                </CTable>
            </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    </>
  )
}

export default StudentDetails


const CNote = ({notation, index, onDelete}) => {

    const [persitedData, setPersistedData] = useState(notation)

    const [showUpdate, setShowUpdate] = useState(false)

    const [note, setNote] = useState(notation.note)
    const [appreciation, setAppreciation] = useState(notation.appreciation)



    const updateItem = () => {
        let postData = {note, appreciation, matiereId: notation.matiere.id, studentId: notation.student.id }
        console.log(postData)
        axios.put(baseUrl+"/notes/"+notation.id, postData, {headers: headers})
    
        .then(
          response => {
              
            if(response.status == 200 ){
              toast.success('Note modifie avec succes!', {autoClose:2000})
              setPersistedData(response.data)
              setShowUpdate(false)
            }else{
              toast.error('Echec modification !', {autoClose:2000})
              setNote(persitedData.note)
              setAppreciation(persitedData.appreciation)
            }
          }
        )
        .catch(error => {
          toast.error('Echec de modification !', {autoClose:2000})
          setNote(persitedData.note)
          setAppreciation(persitedData.appreciation)
          console.error('There was an error!', error);
      });
      }


    const switchUpdate = () => {
        if(!showUpdate){
          //fetchCenters()
        }else{
          setNote(persitedData.note)
          setAppreciation(persitedData.appreciation)
        }
        setShowUpdate(!showUpdate)
    }
    
    
    return (
        <CTableRow key={persitedData.id} inc={index+1}>
            <CTableHeaderCell>{notation.matiere?.label}</CTableHeaderCell>
            <CTableDataCell style={{width: '25%'}}>
                {showUpdate? (<CFormInput size='sm'  value={note} onChange={(e) => setNote(e.target.value)} />): (<>{persitedData.note+'/20'}</>)}
            </CTableDataCell>
            
            <CTableDataCell style={{width: '20%'}}>
                {showUpdate? (<CFormInput size='sm'  value={appreciation} onChange={(e) => setAppreciation(e.target.value)} />): (<>{persitedData.appreciation}</>)}
            </CTableDataCell>
            
            <CTableDataCell style={{width: 'auto', textAlign: 'right'}}>
                {
                showUpdate? (<><CButton color={'secondary'} size='sm' onClick={updateItem} ><small>Modifier</small></CButton><CButton color={'default'} size='sm' onClick={switchUpdate}><small>Annuler</small></CButton></>) :
                (<>
                <CIcon icon={cilPencil} className='me-2' title='editer' onClick={switchUpdate} />
                <CIcon icon={cilTrash} className='me-2' title='supprimer' style={{color: 'red'}} onClick={()=>onDelete(notation.id)} />
                </>)
                }
                    
            </CTableDataCell>
        </CTableRow>
    )
}


const CNoteForm = ({matieres, matiereId, setMatiereId, note, setNote, appreciation, setAppreciation}) => {    
    
    return (
        <>
            <CTableHeaderCell>
                <CFormSelect size='sm' style={{height: '33px'}} id="inlineFormSelectPref" value={matiereId} onChange={(e)=>setMatiereId(e.target.value)} required>
                    <option  value={''}>Choose...</option>
                            {
                            matieres.map(
                                (matiere, index) => (
                                <option key={index} value={matiere.id}>{matiere.label}</option>
                                )
                            )
                            }
                </CFormSelect>
            </CTableHeaderCell>
            <CTableDataCell >
                <CFormInput size='sm' value={note} onChange={(e)=>{setNote(e.target.value)}} />
            </CTableDataCell>
            <CTableDataCell >
                <CFormInput size='sm' value={appreciation} onChange={(e)=>{setAppreciation(e.target.value)}} />
            </CTableDataCell>
        </>
    )
}