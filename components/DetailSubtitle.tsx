import * as React from 'react';
import {Box, Grid, Typography,Paper } from '@mui/material';

interface MainFeaturedPostProps {
    text: string;
}

export default function DetailSubtitle(props: MainFeaturedPostProps) {
  const { text } = props;

  return (
    <Paper
      sx={{
        boxShadow: 'none',
        fontSize: '2rem'
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
              p: { xs: 2, md: 6 },
              pr: { md: 0 },
              py: { md: 2 },
              width: "100%",
              display: 'flex'
            }}
          > 
            <span style={{borderLeft: "5px solid #f1c001", marginRight: "20px"}}/>
            <Typography component="h3" variant="h4" color="inherit" gutterBottom style={{width: "auto", marginBottom:'0px'}}>
              {text}
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  );
}