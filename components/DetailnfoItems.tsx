import * as React from 'react';
import {Box, Grid, Typography,Paper } from '@mui/material';

interface MainFeaturedPostProps {
    name: string;
    value: string;
}

export default function DetailInfoItem(props: MainFeaturedPostProps) {
  const { name, value } = props;

  return (
    <Paper
      sx={{
        fontSize: '2rem',
        boxShadow: 'none',
        p: { xs: 3, md: 6 },
        pt: { xs: 1, md: 1 },
        pb: { xs: 1, md: 1 },
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
          <Paper
            elevation={2}
            sx={{
              position: 'relative',
              p: { xs: 1 },
              width: "100%",
              display: 'flex',
            }}
          > 
            <Typography  component="div" sx={{ fontWeight: 'bold' }}>
                {name}: 
            </Typography>
            <Typography sx={{ mb: 1.5, marginBottom:"0px", marginLeft: "4px" }} color="text.secondary">
                {value}
            </Typography>
          </Paper>
        </Grid>
        
      </Grid>
    </Paper>
  );
}