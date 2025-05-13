import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function CrossButton({ onClick }) {

  return (
    <button
      onClick={onClick}
    >
    <FontAwesomeIcon icon={faTimes} />
    </button>
  );
}

export default CrossButton;
