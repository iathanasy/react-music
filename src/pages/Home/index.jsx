import ArtistListComponent from '@/components/List/ArtistListComponent';
import CoverListComponent from '@/components/List/CoverListComponent';
import React, { useState } from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import {playlistData, artistData} from '@/data/data'

import styles from './home.module.scss'

import {
  RightOutlined
} from '@ant-design/icons';

const recData = [
  {
    name: "推荐歌单",
    list: playlistData,
    type: "playlist",
    path: "/playlist",
  },
  {
    name: "歌手推荐",
    list: artistData.slice(0,50),
    type: "artist",
    path: "/artist",
  }
];

export default function Home() {
    return (
      <div className={styles.row}>
        <h2>由此开启好心情 ~</h2>
        <div className="container">
          <div className={styles.even_columns}>
              {recData.map((item,index) =>
                <div key={index} className={styles.card}>
                  <h3><NavLink to={item.path}>{item.name} <RightOutlined /></NavLink></h3>
                  <div className={styles.card_col}>
                  {item.type === 'artist' ? <ArtistListComponent data={item.list}/> : <CoverListComponent data={item.list} type={item.type}/>}
                  </div>
                </div>
              )}
          </div>
        </div>
    </div>
    )
  }
