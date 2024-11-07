import React from 'react'
import { useLocation,useSearchParams,useMatch } from 'react-router-dom'
import {playlistDetailsData} from '@/data/data'

/**
 * 
 * @returns [歌单、歌手、专辑] 列表详情
 */
const ListComponent = () => {
  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  const x = useLocation()
  const {state} = x
  const type = state ? state?.type : x.pathname.replace('/', '')
  switch(type){
    case 'playlist':
      // 歌单
      return (
        <div>
        <h2>{playlistDetailsData.name}</h2>
        <span>{playlistDetailsData.description}</span>
        <span>{playlistDetailsData.create_time}</span>
        <SongList data={playlistDetailsData.list}/>
      </div>
      )
    case 'artist':
      return '歌手'
    default:
      return '专辑'
  }
}

/**
 * 歌曲列表
 */
export const SongList =({data})=>{
  return (
    <div>
      <ul>
        {data.map((item,index)=>
          <li key={index}>{item.name}</li>
        )}
      </ul>

    </div>
  )
}

export default ListComponent