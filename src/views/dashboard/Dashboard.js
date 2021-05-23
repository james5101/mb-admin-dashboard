import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      {/* <CCard>
        <CCardBody>

        </CCardBody>
        <CCardFooter>
          
        </CCardFooter>
      </CCard> */}

      <WidgetsBrand withCharts/>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Leads
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Leads Today</small>
                        <br />
                        <strong className="h4">10</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Leads This Month</small>
                        <br />
                        <strong className="h4">100</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                </CCol>

                <CCol xs="12" md="6" xl="6">
                  
                <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Follow up Leads today</small>
                        <br />
                        <strong className="h4">10</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Follow up leads this month</small>
                        <br />
                        <strong className="h4">100</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-5">
                  </div>


                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Sales
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Customers This Month</small>
                        <br />
                        <strong className="h4">100</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Orders this Month</small>
                        <br />
                        <strong className="h4">100</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-5">
                  </div>


                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
