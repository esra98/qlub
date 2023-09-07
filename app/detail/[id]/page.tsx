"use client"
import { useEffect, useState } from "react"
import DetailHero from "@/components/DetailHero";
import DetailMain from "@/components/DetailMain";
import { styled } from '@mui/system';

import { Grid, Typography, Paper } from "@mui/material"
import DetailSubtitle from "@/components/DetailSubtitle";
import DetailParagraph from "@/components/DetailParagraph";
import DetailInfoItem from "@/components/DetailnfoItems";
import DetailCategories from "@/components/DetailCategories";
import DetailsSidebar from "@/components/DetailSidebar";


export default function Page({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<any>();
  const API_KEY = '2653c93f';
  useEffect(()=>{
    if(params.id)
    {
      getMovieDetail()
    }
  },[params.id])

  async function getMovieDetail()
  {
    const url = `http://www.omdbapi.com/?i=${params.id}&plot=full&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
            <DetailInfoItem 
              name="Released"
              value={movie?.Released}
            />
            <DetailInfoItem 
              name="Rated"
              value={movie?.Rated}
            />
            <DetailInfoItem 
              name="Runtime"
              value={movie?.Runtime}
            />
            <DetailInfoItem 
              name="Language"
              value={movie?.Language}
            />
            <DetailInfoItem 
              name="Country"
              value={movie?.Country}
            />
            <DetailInfoItem 
              name="Box Office"
              value={movie?.BoxOffice}
            />
            <DetailSubtitle
              text="People"
            />
            <DetailInfoItem 
              name="Director"
              value={movie?.Director}
            />
            <DetailInfoItem 
              name="Writer"
              value={movie?.Writer}
            />
            <DetailInfoItem 
              name="Actors"
              value={movie?.Actors}
            />
            
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