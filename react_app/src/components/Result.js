import React from 'react'
import ToolBar from './ToolBar'
import Display from './Display'
import './styles/Result.css'

function Result() {
    return (
        <div className="result-container">
          <Display/>
          <ToolBar/>
        </div>
    )
}

export default Result
