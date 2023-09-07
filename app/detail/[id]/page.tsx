"use client"

import { useEffect, useState } from "react"
import DetailHero from "@/components/DetailHero";
import Grid from "@mui/material/Grid"
import DetailSubtitle from "@/components/DetailSubtitle";
import DetailParagraph from "@/components/DetailParagraph";
import DetailInfoItem from "@/components/DetailnfoItems";
import DetailCategories from "@/components/DetailCategories";
import DetailsSidebar from "@/components/DetailSidebar";
import LoadingSpinner from "@/components/Loading";

export default function Page({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<any>();
  const [loading, setLoadindg] = useState<any>(true);
  const API_KEY = '2653c93f';
  useEffect(()=>{
    if(params.id)
    {
      getMovieDetail()
    }
  },[params.id])

  async function getMovieDetail()
  {
    setLoadindg(true)
    const url = `https://www.omdbapi.com/?i=${params.id}&plot=full&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoadindg(false)
  }
  if(loading)
  {
    return(
      <LoadingSpinner />
    )
  }
  return(
    <div >
      <DetailHero 
        title= {movie?.Title}
        ratingsData={movie?.Ratings}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div>
            <DetailSubtitle
              text="Storyline"
            />
            <DetailParagraph 
              text={movie?.Plot}
            />
            {movie?.Genre&&(
              <DetailCategories
              categories={movie?.Genre}
            />
            )}
            
            <DetailSubtitle
              text="Details"
            />
            {movie?.Released!=="N/A" &&(
            <DetailInfoItem 
              name="Released"
              value={movie?.Released}
            />
            )}
            {movie?.Awards!=="N/A" &&(
              <DetailInfoItem 
              name="Awards"
              value={movie?.Awards}
            />
            )}
            {movie?.Rated!=="N/A" &&(
            <DetailInfoItem 
              name="Rated"
              value={movie?.Rated}
            />
            )}
            {movie?.Runtime!=="N/A" &&(
            <DetailInfoItem 
              name="Runtime"
              value={movie?.Runtime}
            />
            )}
            {movie?.Language!=="N/A" &&(
            <DetailInfoItem 
              name="Language"
              value={movie?.Language}
            />
            )}
            {movie?.Country!=="N/A" &&(
            <DetailInfoItem 
              name="Country"
              value={movie?.Country}
            />
            )}
            {movie?.BoxOffice!=="N/A" &&(
            <DetailInfoItem 
              name="Box Office"
              value={movie?.BoxOffice}
            />
            )}
            <DetailSubtitle
              text="People"
            />
            {movie?.Director!=="N/A" &&(
            <DetailInfoItem 
              name="Director"
              value={movie?.Director}
            />
            )}
            {movie?.Writer!=="N/A" &&(
            <DetailInfoItem 
              name="Writer"
              value={movie?.Writer}
            />
            )}
            {movie?.Actors!=="N/A" &&(
            <DetailInfoItem 
              name="Actors"
              value={movie?.Actors}
            />
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <DetailsSidebar 
            poster={movie?.Poster}
            alt={movie?.Title}
          />
        </Grid>
        
      </Grid>
    </div>
  )
}