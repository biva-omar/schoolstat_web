import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import Search from 'src/views/common/Search';
import StudentDetails from './StudentDetails';
import axios from 'axios';
import { baseUrl, headers } from 'src/AppConfig';
import { useParams } from 'react-router-dom';

function StudentDetailsWrapper() {

    const { id } = useParams()
    
    const url = baseUrl + '/students/'
    const title = 'Detail élève'
    const [data, setData] = useState()

    const getStudent = () => {
        axios
        .get(url+id, {headers: headers})
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
          setData(null);
        });
    }

    useEffect(
       ()=> {
        getStudent()
       }, []
    )
  
    return (
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{title}</strong>
  
            </CCardHeader>
            <CCardBody>
              
  
              {
                data? (<StudentDetails student={data} />) : (<></>)
              }
              
            </CCardBody>
          </CCard>
          
        </CCol>
        
      </CRow>
    )
}

export default StudentDetailsWrapper
