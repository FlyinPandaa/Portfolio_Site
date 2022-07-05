import React from 'react'
import './popup.css'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div>
            <button className="close-btn">X</button>
            {props.children}
        </div>    
    </div>
  ) : "";
}

export default Popup