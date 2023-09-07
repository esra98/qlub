import React from 'react'
import { styled } from '@mui/system';
import Button from '@mui/material/Button'
import { useGlobalContext } from '@/app/Context/GlobalContext';

const CustomResetButton = styled(Button)(({ theme }) => ({
    backgroundColor:  "#7d00d4 !important",
    marginTop: "40px",
    color: "#fff !important",
    '&:hover': {
      backgroundColor: "#f1c001 !important",
      color: "#7d00d4 !important",
    },
}));

function ResetFilterButton() {
  const { setYearRange, setSearchYear} = useGlobalContext();

  const resetFilters = ()=>{
    location.reload();
  }

  return (
    <div style={{width: "100%"}}>
        <CustomResetButton onClick={resetFilters}>
                Reset
        </CustomResetButton>
    </div>
  )
}

export default ResetFilterButton