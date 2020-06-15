import React from 'react'
import '../styles/ChatPage.css'

const MessageForm = ({ message, sendMessage, setMessage }) => {

  return (
    <form className="messaging-area">

      <div className="emoji"></div>

      <textarea className='text-area' autoComplete='off'
        value={message} onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />

      <div className="btn-area">
        <button className='send-btn' onClick={e => sendMessage(e)}> Send </button>
        {/* <button className='image-btn' onClick={}> Upload </button> */}
      </div>

    </form >
  )
}

export default MessageForm