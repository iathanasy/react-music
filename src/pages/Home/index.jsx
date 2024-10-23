import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
export default function Home() {
    return (
      <div>
        <h2>由此开启好心情 ~</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="discover">发现</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="artist">歌手</NavLink>
            </li>
          </ul>
          {/* 指定路由组件呈现的位置 */}
          <Outlet />
        </div>
    </div>
    )
  }
