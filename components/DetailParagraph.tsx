import * as React from 'react';
import {Box, Grid, Typography,Paper } from '@mui/material';

interface MainFeaturedPostProps {
    text: string;
}

export default function DetailParagraph(props: MainFeaturedPostProps) {
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
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              pt: { md: 0 },
              width: "100%",
              display: 'flex',
            }}
          > 
            <Typography  sx={{ mb: 1.5, marginBottom:"0px" }} color="text.secondary">
              {text}
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  );
}