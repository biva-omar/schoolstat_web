import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import axios from 'axios'
import { headers } from 'src/AppConfig'


const Dashboard = () => {
  const baseUrl = 'http://localhost:8081'
  const countStudentBySubCenterUrl = baseUrl + '/students/state1/'
  const [nStudentBySubCenter, setNStudentBySubCenter] = useState([])

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample2 = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
  const progressExample = []

  const countStudentBySubCenter = async (url) => {
    console.log(headers)
    axios.get(url, {headers})
        .then(response => {
          if(response.status == 200 ){
            setNStudentBySubCenter(response.data)
          }else{
          }
        })
        .catch(error => {
        });
  }

  useEffect(() => {
    countStudentBySubCenter(countStudentBySubCenterUrl)
  }, [])

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Repartition
              </h4>
              <div className="small text-medium-emphasis">Eleves par sous centre</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: nStudentBySubCenter.map(e => e.sousCentre),
              datasets: [
                {
                  label: 'Garcon',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: nStudentBySubCenter.map(e => e.inscritM),
                  fill: true,
                },
                {
                  label: 'Fille',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: nStudentBySubCenter.map(e => e.inscritF),
                },
                {
                  label: 'Total',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: nStudentBySubCenter.map(e => e.inscritM + e.inscritF),
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                    display: true,
                  },
                },
                y: {
                  display: true,
                  grid: {
                    drawOnChartArea: true,
                    drawBorder: true,
                    display: true
                  },
                  /*offset: 10,*/
                  ticks: {
                    beginAtZero: false,
                    maxTicksLimit: 5,
                    stepSize: /*Math.ceil(250 / 20)*/5,
                    max: 250,
                    display: true
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 6,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center" style={{display: 'none'}}>
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
