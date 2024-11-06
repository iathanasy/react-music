import React from 'react'

import { Avatar } from 'antd';
import styles from './artistlist.module.scss'

/**
 * 歌手列表
 * @returns 
 */
const ArtistList = ({data}) => {
  return (
    <div className={styles.rows}>
      {data.map((item,index)=> 
        <div title={item.name} className={styles.cover_col}>
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
    </div>
  )
}

export default ArtistList