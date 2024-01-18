import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import React, { useState } from 'react'
import ImporForm from 'src/components/imports/ImportForm';

const NotesImport = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                <CCardHeader>
                    <strong>Importer les Notes</strong>
                </CCardHeader>
                <CCardBody>
                    <ImporForm resource={'/notes'}></ImporForm>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default NotesImport;