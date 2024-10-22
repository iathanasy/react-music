import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

export default function Discover() {
    return (
      <div>
        <h2>发现音乐</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="playlists">歌单广场</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="toplists">排行榜</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="new">最新音乐</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="artists">歌手</NavLink>
            </li>
          </ul>
          {/* 指定路由组件呈现的位置 */}
          <Outlet />
        </div>
      </div>
    )
  }