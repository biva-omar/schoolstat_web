import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import States1 from './states/States1';
import { cilPrint, cilSave } from '@coreui/icons';
import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import States2 from './states/States2';
import States3 from './states/States3';
import States4 from './states/States4';

const renderView = ({state, object}) => {
	switch(state) {
		case '1':
		return <States1 states={object} />
		case '2':
		return <States2 states={object} />
		case '3':
		return <States3 states={object} />
		default:
		return <States4 states={object} />
	}
}

const GeneratePDF = ({object, state}) => {
	const reportTemplateRef = useRef(null);
	const [display, setDisplay] = useState('none')

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});
		setDisplay('block')
		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	

	return (
		<>
			
			<div style={{display: 'none'}}>
				<div ref={reportTemplateRef} style={{display: display, padding: '25px', fontSize: '9px'}}>
				{renderView({state, object}) }
				</div>
			</div>
            <CButton color="info" size="sm" style={{float: 'right'}} onClick={handleGeneratePdf} >
                <CIcon icon={cilSave} className='me-2' />
                Generer PDF
            </CButton>
		</>
	);
}

export default GeneratePDF;
