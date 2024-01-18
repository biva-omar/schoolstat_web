import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import React, { useState } from 'react'
import ImporForm from 'src/components/imports/ImportForm';

const StudentsImport = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                <CCardHeader>
                    <strong>Importer les élèves</strong>
                </CCardHeader>
                <CCardBody>
                    <ImporForm resource={'/students'}></ImporForm>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default StudentsImport;