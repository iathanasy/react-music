import {artistData} from '@/data/data'
import ArtistListComponent from '@/components/List/ArtistListComponent';
/**
 * 
 * @returns 歌手
 */
export default function ArtistList() {
    
    return (
      <>
          <h2>歌手列表</h2>
          <ArtistListComponent data={artistData}/>
      </>
    )
  }