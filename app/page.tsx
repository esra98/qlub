import Image from 'next/image'
import {Hero, SearchBar, CustomFilter} from '@/components'
import MovieList from '@/components/MovieList'
export default function Home() {
  return (
    <main className="overflow-hidden">
        <MovieList />
    </main>
  )
}
