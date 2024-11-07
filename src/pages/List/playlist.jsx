import ListComponent from '@/components/Details/ListComponent';
import CoverListComponent from '@/components/List/CoverListComponent';
import {playlistData} from '@/data/data'
import {useSearchParams } from 'react-router-dom'
export default function PalyList() {
  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  if(id){
    return (<ListComponent />)
  }else{
    return (
      <>
        <h2>歌单列表</h2>
        <CoverListComponent data={playlistData}/>
      </>
    )
  }
  }