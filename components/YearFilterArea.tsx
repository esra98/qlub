import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import YearSlider from './YearSlider';
import { styled } from '@mui/system';
import SearchYearInput from './SearchYearInput';
import { useGlobalContext } from '@/app/Context/GlobalContext';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResetFilterButton from './ResetFilterButton';
const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-thumb': {
        backgroundColor: '#7d00d4', // Customize the thumb color
    },
}));
const CustomCard = styled(Card)(({ theme }) => ({
  marginBottom: "30px",
  minWidth: 275,
  background:"#f6f0fd",
  padding: "20px"
}));
export default function ToggleArea() {
    const {searchYear} = useGlobalContext();  

    const [isAreaVisible, setIsAreaVisible] = useState(false);
  
    const toggleArea = () => {
      setIsAreaVisible(!isAreaVisible);
    };
  
    return (
      
      <div>
        <FormControlLabel sx={{marginBottom: "20px"}}
          control={
            <CustomSwitch
              checked={isAreaVisible}
              onChange={toggleArea}
              name="toggleArea"
            />
          }
          label="Show Year Filter"
        />
  
        {isAreaVisible && (
          <CustomCard>
          <CardContent>
            {/* The content you want to display when the Switch is ON */}
            {!searchYear && (
              <div>
              <YearSlider />
            </div>
            )}
            <SearchYearInput />
            <ResetFilterButton />
          </CardContent>
        </CustomCard>
          
        )}
      </div>
    );
  }
  