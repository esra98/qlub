import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
interface MovieCardProps {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}


export default function MovieCard({ Title, Year, imdbID, Poster }: MovieCardProps) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%',padding:"0px", borderBottom:"solid #f1c001 5px" }} id={imdbID}>
        <Link href={`/detail/${imdbID}`} style={{ textDecoration: 'none' }}>
        <CardActionArea sx={{  }}>
            <CardMedia
            component="img"
            height="140"
            image={Poster!=="N/A"?Poster:"/no-poster.png"}
            alt={Title}
            sx={{ objectFit: 'cover', height: '200px',borderRadius: '8px' }}
            />
            <CardContent>
            <Typography component="div">
                {Title} 
            </Typography>
            <Typography sx={{ mb: 1.5, marginBottom:"0px" }} color="text.secondary">
                {Year}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Link>
    </Card>
  );
}
