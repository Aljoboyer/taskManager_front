import  React, { useState } from 'react';
import {useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { LayoutNav } from './layoutComponents/LayoutNav';
import LayoutSidebar from './layoutComponents/LayoutSidebar';

export default function LayoutContainer({children}: any) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); 

  const [open, setOpen] = React.useState(isLargeScreen);

  React.useEffect(() => {
    setOpen(isLargeScreen);
  }, [isLargeScreen]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{width: '100%' ,position: 'relative',}}>
      <LayoutNav handleDrawerOpen={handleDrawerOpen} />
      <Box sx={{width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

          <LayoutSidebar open={open} handleDrawerClose={handleDrawerClose} sideManuList={[]}/>

          <Box className='ease-in-out duration-500' sx={{width: open && isLargeScreen ? '85%' : '100%', marginX: 'auto',}}>
            {children}
          </Box>
      </Box>
    </Box>
  );
}
