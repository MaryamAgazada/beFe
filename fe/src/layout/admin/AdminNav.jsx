import React from 'react'
import { Link } from 'react-router-dom'
function AdminNav() {
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/Admin/detail">detail</Link>
          </li>
          <li>
            <Link to="/Admin/add">add</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default AdminNav
