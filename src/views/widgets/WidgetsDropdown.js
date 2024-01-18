import React, { useEffect, useState } from 'react'
import { CRow, CCol, CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle, CWidgetStatsA, } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilBuilding, cilOptions, cilPeople, cilSchool, } from '@coreui/icons'
import axios from 'axios'
import { baseUrl, headers } from 'src/AppConfig'

const WidgetsDropdown = () => {
  
  const countTrainingOrderUrl = baseUrl + '/training-orders/count'
  const countSubCenterUrl = baseUrl + '/exam-sub-centers/count'
  const countSchoolUrl = baseUrl + '/schools/count'
  const countStudentUrl = baseUrl + '/students/count'
  const countStudentBySubCenterUrl = baseUrl + '/students/count-by-sub-centers'
  const countStudentBySchoolUrl = baseUrl + '/students/count-by-schools'
  const countSchoolBySubCenterUrl = baseUrl + '/schools/count-by-sub-centers'

  const [nSubCenter, setNSubCenter] = useState(0)
  const [nSchool, setNSchool] = useState(0)
  const [nStudent, setNStudent] = useState(0)
  const [nTrainingOrder, setNTrainingOrder] = useState(0)
  const [nStudentBySubCenter, setNStudentBySubCenter] = useState([])
  const [nStudentBySchool, setNStudentBySchool] = useState([])
  const [nSchoolBySubCenter, setNSchoolBySubCenter] = useState([])

  const countTrainingOrder = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNTrainingOrder(response.data)
          }else{
            setNTrainingOrder(10000)
          }
        })
        .catch(error => {
            setNTrainingOrder('Error...')
        });
  }

  const countSubCenter = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNSubCenter(response.data)
          }else{
            setNSubCenter('Error...')
          }
        })
        .catch(error => {
          setNSubCenter('Error...')
        });
  }

  const countSchool = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNSchool(response.data)
          }else{
            setNSchool('Error...')
          }
        })
        .catch(error => {
          setNSchool('Error...')
        });
  }

  const countStudent = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNStudent(response.data)
          }else{
            setNStudent('Error...')
          }
        })
        .catch(error => {
          setNStudent('Error...')
        });
  }

  const countStudentBySubCenter = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNStudentBySubCenter(response.data)
          }else{
          }
        })
        .catch(error => {
        });
  }

  const countStudentBySchool = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNStudentBySchool(response.data)
          }else{
          }
        })
        .catch(error => {
        });
  }

  const countSchoolBySubCenter = async (url) => {
    axios.get(url, {headers: headers})
        .then(response => {
          if(response.status == 200 ){
            setNSchoolBySubCenter(response.data)
          }else{
          }
        })
        .catch(error => {
        });
  }
  useEffect(() => {
    countTrainingOrder(countSchoolUrl)
    countSubCenter(countSubCenterUrl)
    countSchool(countSchoolUrl)
    countStudent(countStudentUrl)
    countStudentBySubCenter(countStudentBySubCenterUrl)
    countStudentBySubCenter(countStudentBySubCenterUrl)
    countStudentBySchool(countStudentBySchoolUrl)
    countSchoolBySubCenter(countSchoolBySubCenterUrl)
    
  }, [])

  const fetchCount = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
    
  }

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              {nTrainingOrder}{' '}
              <span className="fs-5 fw-normal">
                Ordres <CIcon icon={cilSchool} />
              </span>
            </>
          }
          title="Ecoles par ordre"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: nStudentBySubCenter.map(e => e.label),
                datasets: [
                  {
                    label: 'Nombre d\'ecoles',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: nStudentBySubCenter.map(e => e.count),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    /*min: 2,
                    max: 40,*/
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {nSubCenter}{' '}
              <span className="fs-6 fw-normal" style={{display: 'none'}}>
                (40.9% <CIcon icon={cilArrowTop} />)
              </span>
              <span className="fs-5 fw-normal">
                Sous Centres <CIcon icon={cilBuilding} />
              </span>
            </>
          }
          title="Eleves par sous centre"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: nStudentBySubCenter.map(e => e.label),
                datasets: [
                  {
                    label: 'Nombre d\'eleves',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: nStudentBySubCenter.map(e => e.count),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                   /* min: 0,
                    max: 40,*/
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              {nSchool}{' '}
              <span className="fs-5 fw-normal">
                Ecoles <CIcon icon={cilSchool} />
              </span>
            </>
          }
          title="Ecoles par sous centre"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: nSchoolBySubCenter.map(e => e.label),
                datasets: [
                  {
                    label: 'Nombres d\'ecoles',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: nSchoolBySubCenter.map(e => e.count),
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 3,
                    hitRadius: 10,
                    hoverRadius: 5,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              {nStudent}{' '}
              <span className="fs-5 fw-normal">
                Eleves <CIcon icon={cilPeople} />
              </span>
            </>
          }
          title="Eleves par ecole"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: nStudentBySchool.map(e => e.label),
                datasets: [
                  {
                    label: 'Nombre d\'eleves',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: nStudentBySchool.map(e => e.count),
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
