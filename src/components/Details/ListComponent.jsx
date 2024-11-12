import React,{useContext} from 'react'
import { useLocation,useSearchParams,useMatch, NavLink } from 'react-router-dom'
import {playlistData, artistData, playlistDetailsData, artistDetailsData, albumDetailsData} from '@/data/data'
import { Space, Table,Avatar,Button,Tag   } from 'antd';
import styles from './details.module.scss'

import { PlayerContext } from "@/context/PlayerContext";

import {
  CaretRightOutlined,
  PlusOutlined,
  StarOutlined
} from '@ant-design/icons';

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
      const p = playlistData.filter((item) =>item.id === parseInt(id))
      // 歌单
      const plist = p.length > 0 ? p[0] : {}
      return (
        <HeaderDetail list={playlistDetailsData.list} name={plist.name} pic={plist.pic} desc={playlistDetailsData.description} ctime={plist.create_time}>
          <SongList data={playlistDetailsData.list}/>
        </HeaderDetail>
      )
    case 'artist':
      const a = artistData.filter((item) =>item.id === id)
      // 歌手
      const alist = a.length > 0 ? a[0] : {}
      return (
        <HeaderDetail list={artistDetailsData.list} name={alist.name} pic={alist.pic} desc={artistDetailsData.desc}>
          <h2>歌曲列表</h2>
          <SongList data={artistDetailsData.list}/>
        </HeaderDetail>
      )
    default:
      // 专辑
      return (
        <HeaderDetail list={albumDetailsData.list} name={albumDetailsData.name} pic={albumDetailsData.pic} desc={albumDetailsData.desc}>
          <h2>包含歌曲列表</h2>
          <SongList data={albumDetailsData.list}/>
        </HeaderDetail>
      )
  }
}

export const HeaderDetail = (props)=>{
  const {playlistAll,jonPlaylist} = useContext(PlayerContext)
  const {list, name, pic, desc, ctime, children} = props
  return (
    <div className={styles.container}>
        <div className={styles.row_header}>
          <div className={styles.row_header_img}>
            {/* <Avatar style={{width:'100%',height:'100%'}} shape="square" src={pic}/> */}
            <Avatar style={{width:'12.5rem',height:'12.5rem'}} shape="square" src={pic}/>
          </div>
          <div className={styles.row_header_col}>
            <h2 title={name}>{name}</h2>
            {desc && <p title={desc}>{desc}</p>}
            {ctime && <p title={`创建于 · ${ctime}`}>创建于 · {ctime}</p>}
            <div className={styles.row_header_btn}>
              <Button type="primary" onClick={()=>playlistAll(list)} icon={<CaretRightOutlined />}>播放全部 {list?.length}</Button>
              <Button type="primary" onClick={()=>jonPlaylist(list)}icon={<PlusOutlined />}>加入播放列表</Button>
              <Button type="primary" icon={<StarOutlined />}>收藏歌单</Button>
            </div>
          </div>
        </div>
        <div className={styles.row_content}>
          {children}
        </div>
    </div>
  )
}

/**
 * 歌曲列表
 */
export const SongList =(props)=>{
  const {formatTime} = useContext(PlayerContext)
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
              <NavLink key={item.id} to={`/artist?id=${item.id}`}>
                  <Tag color="magenta">{item.name}</Tag>
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
          <NavLink to={`/album?id=${album.id}`}>
            <Tag color="success">{album.name}</Tag>
          </NavLink>
        </>
      ),
    },
    {
      title: '时长',
      dataIndex: 'time',
      key: 'time',
      render: (_, { time }) => (
        <span>{formatTime(time)}</span>
      ),
    },
  ];

  return (
    <div>
      <Table rowKey={record => record.id} columns={columns} dataSource={props.data} />;
    </div>
  )
}

export default ListComponent