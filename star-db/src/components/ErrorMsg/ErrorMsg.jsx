import React from 'react'

import './ErrorMsg.css'
import ds from './ds.png'

const ErrorMsg = (props) => {
  return(
    <div className="error-msg">
      <img src={ds} alt=""/>
      <div className="title">Oops!</div>
      <div className="text">
        <span>Something has gone</span>
        <span>(but we already send drones!)</span>
      </div>
    </div>
  )
}
export default ErrorMsg
