import React, { useState } from 'react';
import {Switch, FormControlLabel, Card, CardContent} from '@mui/material';
import YearSlider from './YearSlider';
import SearchYearInput from './SearchYearInput';
import ResetFilterButton from './ResetFilterButton';
import { styled } from '@mui/system';
import { useGlobalContext } from '@/app/Context/GlobalContext';

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
          label="Year Filter"
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
  