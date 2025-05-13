import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './styles/button.css'

function TickButton({ completed, onClick }) {

  return (
    <button
      onClick={onClick}
      className={completed ? "active" : ""}
    >
    <FontAwesomeIcon icon={faCheck} />
    </button>
  );
}

export default TickButton;
