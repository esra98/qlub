"use client"
import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/app/Context/GlobalContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const CustomSearchButton = styled(Button)(({ theme }) => ({
  backgroundColor:  "#f1c001 !important",
  '&:hover': {
    backgroundColor: "#fff !important",
    color: "#7d00d4 !important",
  },
}));

export default function SearchAppBar() {
  const { searched, setSearched, setSearchYear } = useGlobalContext();  
  const router = useRouter();
  const [currentSearch, setCurrentSearch] = useState('');

  useEffect(() => {
    setCurrentSearch(searched);
  }, [searched]);

  function searchClc() {
    setSearched(currentSearch);
    setSearchYear('');
    router.push('/');
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      searchClc();
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#7d00d4' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movie DB
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={currentSearch}
              onChange={ev => setCurrentSearch(ev.target.value)}
              onKeyPress={handleKeyPress} // Call searchClc when Enter key is pressed
            />
          </Search>
          <CustomSearchButton onClick={searchClc} variant="contained">GO!</CustomSearchButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
