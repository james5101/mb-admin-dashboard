import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="Https://movingbutlers.com" target="_blank" rel="noopener noreferrer">Moving Butlers</a>
        <span className="ml-1">&copy; 2021 Moving Butlers.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
