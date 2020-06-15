import React from 'react'
import '../styles/ChatPage.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import moment from 'moment'

const MessageHistory = ({ msgHistory, chatId }) => (

  <ScrollToBottom className="message-history">

      {msgHistory.map((msg, i) => (
          <div className={`message-history__msg--${msg.chatId === chatId ? 'me' : msg.username === 'admin' ? 'admin' : 'juicy'}`} key={ i } >

              <div className='message-history__text'> {msg.message}                                    </div>
              
              <div className="message-history__details">
                  <span className='message-history__details__username'  > { msg.username === 'admin' ? null : `${msg.username} -  ` }  </span>
                  <span className='message-history__details__createdAt' > { moment(msg.createdAt).format('h:mm:ss a') }  </span>
              </div>
          </div>
      ))}

  </ScrollToBottom >
)

export default MessageHistory