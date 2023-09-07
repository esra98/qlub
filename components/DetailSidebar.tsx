import * as React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography} from '@mui/material';

interface MainFeaturedPostProps {
    poster: string;
    alt: string;
}

export default function DetailsSidebar(props: MainFeaturedPostProps) {
  const { poster, alt } = props;
  return (
    <Card 
        sx={{ 
            maxWidth: 345,
            p: { xs: 3, md: 6 },
            boxShadow: 'none'
        }}
        >
        <CardMedia
            component="img"
            height="140"
            image={poster!=="N/A"?poster:"/no-poster.png"}
            alt={alt}
            />
    </Card>
  );
}