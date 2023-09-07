import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';
import { useGlobalContext } from '@/app/Context/GlobalContext';
import Grid from '@mui/material/Grid';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {setSearchYear, setYearRange, yearRange, searchYear } = useGlobalContext(); 
  const [selectedYear, setSelectedYear] = React.useState<string>(searchYear); // State to store the selected year
  
  const years = Array.from({ length: 124 }, (_, i) => 2023 - i); // Generate an array of years from 2023 to 1900

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value); // Update the selected year when the user makes a selection
    setSearchYear(event.target.value)
  }

  React.useEffect(()=>{
    setSelectedYear(searchYear); // Update the selected year when the user makes a selection
  },[searchYear])

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md="auto">
        <Typography color="text.secondary" sx={{ marginRight: '10px' }}>
          You already know the exact release year? Let's search for it with the title from the search bar above!
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto">
        <FormControl sx={{ width: '250px', marginTop: '10px' }}>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={selectedYear}
            label="Year"
            onChange={handleChange}
            autoWidth
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default App;
