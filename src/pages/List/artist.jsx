import {artistData} from '@/data/data'
import ListComponent from '@/components/Details/ListComponent';
import ArtistListComponent from '@/components/List/ArtistListComponent';
import {useSearchParams } from 'react-router-dom'
/**
 * 
 * @returns 歌手
 */
export default function ArtistList() {
  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  if(id){
    return (<ListComponent />)
  }else{
      return (
        <>
            <h2>歌手列表</h2>
            <ArtistListComponent data={artistData}/>
        </>
      )
    }
  }