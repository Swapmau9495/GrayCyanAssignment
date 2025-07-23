import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, IconButton, Tooltip } from '@mui/material';

import Sidebar from '../components/Sidebar';
import TopNavbar from "../components/TopNavbar";
import AllProductsDetails from '../components/AllProducts/AllProductsDetails';

const Inventory = () => {
  return (
  <Box
  sx={{
    display: 'flex',
width: '100vw',
height: '100vh', // full screen height
overflow: 'hidden',
overflowY: 'auto',

backgroundImage: 'linear-gradient(to bottom, #0E0D2A 90%, #33a7a3ff)',
backgroundRepeat: 'no-repeat',
backgroundSize: '100% 100%',
backgroundColor: '#0E0D2A', // fallback base

'&::-webkit-scrollbar': {
  width: '6px',
},
'&::-webkit-scrollbar-track': {
  background: 'transparent',
},
'&::-webkit-scrollbar-thumb': {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
},
'&::-webkit-scrollbar-thumb:hover': {
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
},

scrollbarWidth: 'thin', // Firefox
scrollbarColor: 'rgba(255,255,255,0.2) transparent',
  }}
>
  <Sidebar />

  <Box sx={{ flexGrow: 1 }}>
    <TopNavbar />
    
    {/* Page content */}
    <AllProductsDetails/>
    
  </Box>
</Box>
  );
};

export default Inventory;
