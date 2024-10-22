import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

export default function Artust() {
    return (
      <div>
        <h2>歌手</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="songs">单曲</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="albums">专辑</NavLink>
            </li>
          </ul>
          {/* 指定路由组件呈现的位置 */}
          <Outlet />
        </div>
      </div>
    )
  }