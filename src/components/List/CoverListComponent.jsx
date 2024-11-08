import React from 'react'
import styles from './coverlist.module.scss'

import { Image,Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
/**
 * @param type ([playlist：歌单,album: 专辑])
 * @returns 封面列表（歌单、专辑）
 */
const CoverListComponent = ({data, type = 'playlist'}) => {
  const navigate = useNavigate()
  const path = '/' + type
  const detail=(item)=>{
    navigate(path + '?id=' +item.id, {
      state: {
        id: item.id,
        type: type,
        name: item.name
      }
    })
  }
  return (
    <div className={styles.rows}>
      {data.map((item,index)=> 
        <div key={index} title={item.name} className={styles.cover_col} onClick={()=>detail(item)}>
            {/* <img src={item.pic} /> */}
            <div className={styles.cover_img}>
              <Avatar
                style={{width:'100%',height:'100%'}} shape="square"
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

export default CoverListComponent