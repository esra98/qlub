import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface MainFeaturedPostProps {
    year: string;
    title: string;
}

export default function DetailMain(props: MainFeaturedPostProps) {
  const { year,title } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        top: 60,
        backgroundColor: '#f6f0fd;',
        color: '#212529',
        mb: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the priority of the hero background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 6, md: 6 },
              pr: { md: 0 },
              width: "100%"
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {year}
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  );
}