import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import SideBar from './Sidebar'
import MessageHistory from './MessageHistory'
import MessageForm from './MessageForm'
import '../styles/ChatPage.css'

const socket = io('https://communicator-application.herokuapp.com/')
const chatId = Math.random() * 100

const ChatPage = ({ location }) => {

  const [ username, setUsername ] = useState('')
  const [ room, setRoom ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ users, setUsers] = useState([])
  const [ msgHistory, setMsgHistory ] = useState([])

  
  useEffect(() => {
    const { username, room } = queryString.parse(location.search)
    setUsername(username)
    setRoom(room)

    socket.emit('join', { chatId, username, room }, error => { if (error) alert(error) })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ location.search ])

  useEffect(() => {
    socket.on('message', message => {
      setMsgHistory(msgHistory => [ ...msgHistory, message ])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [])

  const sendMessage = e => {
    e.preventDefault()
    if (message.trim()) socket.emit('message', message, () => setMessage(''))
  }

  return (
    <div className='chat-page' >

      <SideBar username={username} room={room} users={users}/>

      <div className="container-chat">
        <MessageHistory msgHistory={msgHistory} chatId={chatId} />
        <MessageForm setMessage={setMessage} sendMessage={sendMessage} message={message} />
      </div>

    </div >
  )
}
export default ChatPage