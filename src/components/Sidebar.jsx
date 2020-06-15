import React from 'react'
import '../styles/ChatPage.css'

const Sidebar = ({ username, room, users }) => (

  <div className="sidebar">
    <p className='sidebar__username'> {username} </p>
    <p className='sidebar__room'> {room} </p>
    {
      users.map((user, i) => ( <p key={i} className='sidebar__users-list'> {user.username} </p>)) 
    }
  </div>

)

export default Sidebar