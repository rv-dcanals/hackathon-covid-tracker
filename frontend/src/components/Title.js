import React from 'react'
import '../styles/Title.css';

function Title(props) {
    return (
      <div className="Title">
          <header>
            <h1>{props.name}</h1>
        </header>
      </div>
    )
  }
  
  export default Title