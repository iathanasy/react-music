import ListComponent from '@/components/Details/ListComponent';
import {useSearchParams } from 'react-router-dom'

export default function AlbumList() {
  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  return (<ListComponent />)
  }