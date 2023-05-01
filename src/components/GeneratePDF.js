import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import App from 'src/App';
import { Icons } from 'react-toastify';
import States1 from './states/States1';
import { cilPrint, cilSave } from '@coreui/icons';
import { CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import State1List from 'src/views/states/state1/State1List';

const GeneratePDF = ({object}) => {
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
				<div ref={reportTemplateRef} style={{display: display}}>
					<States1 states={object} />
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