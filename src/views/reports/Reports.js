import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CCardFooter
} from '@coreui/react'

import reportsData from './ReportsData'




const Reports = () => {

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            Reports
            
          </CCardHeader>
          
          <CCardBody>
        
          <CCardFooter>
          <CButton
              color="primary" 
              
            >Generate Report</CButton>
          </CCardFooter>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Reports
