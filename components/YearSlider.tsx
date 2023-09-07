import * as React from 'react';
import {Box, Slider, Typography} from '@mui/material';
import { useGlobalContext } from '@/app/Context/GlobalContext';
import { styled} from '@mui/material/styles';

function valuetext(value: number) {
    return `${value}°C`;
}
  
const CustomSlider = styled(Slider)(({ theme }) => ({
    color: "#7d00d4", //color of the slider between thumbs
    "& .MuiSlider-thumb": {
      backgroundColor: "#7d00d4" //color of thumbs
    },
    "& .MuiSlider-rail": {
      color: "#f1c001" ////color of the slider outside  teh area between thumbs
    },
    maxWidth: "350px",
    marginTop: "40px"
    
  }));

function YearSlider() { 
  const {yearRange, setYearRange , searchYear} = useGlobalContext();    
  const [value, setValue] = React.useState<number[]>([yearRange[0],yearRange[1]]);

  const handleChange = (event: Event, newValue: number | number[]) => {
  setValue(newValue as number[]);
  setYearRange(newValue as number[])
  };
  return (
    <Box >
        <Typography component="div">
            You can use the slider below to filter the listed movies.
        </Typography>
        <CustomSlider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            step={1}
            min={1900}
            max={2023}
            disabled={searchYear ? true : false}
        />
    </Box>
  )
}

export default YearSlider