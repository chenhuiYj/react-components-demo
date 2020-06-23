import React from 'react'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
  render (){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    )
  }
}

export default SideBar