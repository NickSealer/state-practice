import React from 'react'

export const MessageSent = (props) => {
  const message = props.message
  
  return (
    <div class="alert alert-info" role="alert" id='notify' style={{display: 'none'}}>
      {message}
    </div>
  )
}
