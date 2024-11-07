import React from 'react'

import { Avatar } from 'antd';
import styles from './artistlist.module.scss'
import { NavLink, useNavigate } from 'react-router-dom';

/**
 * 歌手列表
 * @returns 
 */
const ArtistListComponent = ({data}) => {
  const navigate = useNavigate()
  const detail=(item)=>{
    navigate('/artist?id=' +item.id, {
      state: {
        id: item.id,
        type: 'artist',
        name: item.name
      }
    })
  }
  return (
    <div className={styles.rows}>
      {data.map((item,index)=> 
        <div key={index} title={item.name} className={styles.cover_col} onClick={()=>detail(item)}>
            <div className={styles.cover_img}>
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                src={item.pic}
              />
            </div>
            <span>{item.name}</span>
        </div>
        
      )}
      {!data && '空空如也，怎么什么都没有啊'}
    </div>
  )
}

export default ArtistListComponent