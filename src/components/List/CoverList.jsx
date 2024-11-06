import React from 'react'
import styles from './coverlist.module.scss'

import { Image } from 'antd';
/**
 * 
 * @returns 封面列表（歌单、专辑）
 */
const CoverList = ({data, type}) => {
  return (
    <div className={styles.rows}>
      {data.map((item,index)=> 
        <div title={item.name} className={styles.cover_col}>
            {/* <img src={item.pic} /> */}
            <div className={styles.cover_img}>
              <Image
                preview={false}
                src={item.pic}
              />
            </div>

            <span>{item.name}</span>
        </div>
        
      )}
    </div>
  )
}

export default CoverList