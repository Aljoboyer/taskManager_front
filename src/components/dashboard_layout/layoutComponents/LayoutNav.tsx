import React from 'react'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Badge, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import { Notifications } from '@mui/icons-material';
import { COLORS } from '../../../theme/colors';
import ProfileMenu from '../../shared/Menus/ProfileManu';

const manuItems = [
    // {"label": "Profile", "link": "", "icon": <Avatar fontSize="small" />},
    {"label": "Logout", "link": "", "icon": <Logout fontSize="small"/>},
]

export const LayoutNav = ({handleDrawerOpen}: any) => {

  return (
    <Box sx={{position:'sticky',top: '0px', width: '100%', backgroundColor: 'white', height: '70px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingX: {md: '20px'}, alignItems: 'center' ,zIndex: 1,}}>
        
    <Box sx={{display: 'flex', 
      alignItems: 'center', 
      width: {xs: '100%', sm: 'mx-content', md:'100%', lg: '80%'},
      overflowX: {xs: 'initial', sm: 'auto'},
      }}>
      <Toolbar>
          <div  className='hidden md:flex flex-row items-center cursor-pointer '>
         <Typography  sx={{ fontWeight: 'bold', color: COLORS.maroon , fontSize: {xs: '18px', md: '24px'}}}>
          Task
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: COLORS.maroon , fontSize: {xs: '18px', md: '24px'}}}>App</Typography>
       </div>
        <Button
            onClick={() => handleDrawerOpen()}
            sx={{
              display: {lg: 'none'},
              marginLeft: {xsm: '0px', md: '20px'},
              backgroundColor: COLORS.overlay,
              padding: '5px',
              minWidth: 'auto', 
              width: '40px',
              height: '30px',
              '&:hover': {
                backgroundColor: COLORS.baseColor,
                width: '40px',
                height: '30px',
              },
            }}
          >
            <MenuIcon color="secondary"/>
        </Button>
      </Toolbar>
   
    </Box>

    <Box className='flex flex-row items-center'  sx={{ marginRight: '15px' }}>
        <div>
           <Badge  color="warning">
              <Notifications fontSize="medium" className="text-bluemain" sx={{fontSize: '30px'}} />
          </Badge>
        </div>

      <ProfileMenu manuItems={manuItems}/>
    </Box>
  </Box>
  )
}
