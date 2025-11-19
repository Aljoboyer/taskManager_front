import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { COLORS } from '../../../theme/colors';
import { sideManuList } from '../../../utils/const_data/sideManuList';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItemType {
  title: string;
  icon: React.ReactNode;
}

interface LayoutSidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
  sideManuList: MenuItemType[];
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const LayoutSidebar: React.FC<LayoutSidebarProps> = ({
  open,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isXtraScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname); 

  const drawerWidth = isXtraScreen && !open
    ? '4%'
    : isXtraScreen && open
    ? '15%'
    : isLargeScreen && !open
    ? '5%'
    : isLargeScreen && open
    ? '18%'
    : isMediumScreen
    ? '30%'
    : '70%';

  return (
    <Drawer
      className="ease-in-out duration-500"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: isLargeScreen ? '80px' : '0px',
        border: 'none',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          marginTop: isLargeScreen ? '80px' : '0px',
          border: 'none',
        },
      }}
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      anchor="left"
      open={open}
    >
      {!isLargeScreen && (
        <DrawerHeader
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div className="flex flex-row items-center cursor-pointer">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: COLORS.baseColor }}>
              Task
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: COLORS.maroon }}>
              App
            </Typography>
          </div>

          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
      )}

      <List sx={{ paddingX: '15px', marginTop: '10px' }}>
        {sideManuList?.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              className="ease-in-out duration-300"
              sx={{
                marginTop: '6px',
                borderRadius: '8px',
                backgroundColor: location.pathname == item?.link ? COLORS.maroon : COLORS.bluemain,
                '&:hover': { backgroundColor: COLORS.maroon },
              }}
              onClick={() => {
                navigate(item.link)
              }}
            >
              <ListItemIcon sx={{ minWidth: '0px', color: COLORS.white }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
                sx={{
                  color: COLORS.white,
                  marginLeft: '16px',
                  '& .MuiListItemText-primary': { fontSize: '14px' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Drawer>
  );
};

export default LayoutSidebar;
