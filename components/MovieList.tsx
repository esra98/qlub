"use client"

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/Context/GlobalContext';
import MovieCard from './MovieCard';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import ToggleArea from './YearFilterArea';
import NoResultsFound from './NoResultSection';

const MovieListComponent = styled('div')({
  padding: '32px', // Your styles here
});

const CustomLoadButton = styled(Button)(({ theme }) => ({
  backgroundColor:  "#7d00d4 !important",
  marginTop: "40px",
  color: "#fff !important",
  '&:hover': {
    backgroundColor: "#f1c001 !important",
    color: "#7d00d4 !important",
  },
}));

function MovieList() {
  const { searched, yearRange , searchYear} = useGlobalContext();
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const API_KEY = '2653c93f';

  useEffect(() => {
    // Filter the movies based on the year range
    if(movies.length!==0)
    {
      const filtered = movies.filter(movie => {
        const movieYear = parseInt(movie.Year, 10);
        return movieYear >= yearRange[0] && movieYear <= yearRange[1];
      });
  
      // Update the 'filteredMovies' state with the filtered list
      setFilteredMovies(filtered);
    }
    
  }, [movies, yearRange]);

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searched}&page=${currentPage}&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies((prevMovies) => [...prevMovies, ...(data.Search || [])]);
        setTotalPages(Math.ceil(data.totalResults / 10)); // OMDB API returns 10 results per page
      } else {
        setMovies([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getMovieByYear = async () => {
    const url = `https://www.omdbapi.com/?t=${searched}&y=${searchYear}&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        console.log(data)
        setFilteredMovies([data]);
        setTotalPages(0); // OMDB API returns 10 results per page
      } else {
        setFilteredMovies([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [currentPage, searched]);

  useEffect(() => {
    setMovies([])
  }, [searched]);

  useEffect(() => {
    if(searchYear!=="")
    {
      setMovies([])
      getMovieByYear();
    }
    
  }, [searchYear]);

  const handleLoadMore = () => {
    // Increment the current page to load the next page of results
    setCurrentPage(currentPage + 1);
  };

  return (
    <MovieListComponent>
      {searchYear}
      <ToggleArea />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredMovies.map((movie) => (
          <Grid item xs={2} sm={4} md={2} key={movie.imdbID}>
            <MovieCard
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Poster={movie.Poster}
            />
          </Grid>
        ))}
        {filteredMovies.length === 0 && (
          <NoResultsFound />
        )}
        </Grid>
      {currentPage < totalPages && (
        <div style={{width: "100%", textAlign: "center"}}>
          <CustomLoadButton onClick={handleLoadMore} disabled={currentPage >= totalPages}>
            Load More
          </CustomLoadButton>
        </div>
        
      )}
    </MovieListComponent>
  );
}

export default MovieList;
