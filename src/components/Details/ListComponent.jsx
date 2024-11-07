import React from 'react'
import { useLocation,useSearchParams,useMatch, NavLink } from 'react-router-dom'
import {playlistDetailsData} from '@/data/data'
import { Space, Table } from 'antd';
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

  const columns = [
    {
      title: '音乐标题',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '歌手',
      key: 'artist',
      dataIndex: 'artist',
      render: (_, { artist }) => (
        <>
          {artist.map((item) => {
            return (
              <NavLink to={`/artist?id=${item.id}`}>
                {item.name}
              </NavLink>
            );
          })}
        </>
      ),
    },
    {
      title: '专辑',
      dataIndex: 'album',
      key: 'album',
      render: (_, { album }) => (
        <>
          <NavLink to={`/album?id=${album.id}`}>{album.name}</NavLink>
        </>
      ),
    },
    {
      title: '时长',
      dataIndex: 'time',
      key: 'time',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default ListComponent