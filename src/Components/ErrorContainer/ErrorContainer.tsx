import React from 'react'
import './ErrorContainer.scss'

const ErrorContainer = () => {
  return (
    <div className='message-box'>
      <p className='message-text'>Oops! Something went wrong, please reinspire! </p>
      <p className='message-text'>You will not be able to save this inspiration.</p>
    </div>
  )
}

export default ErrorContainer