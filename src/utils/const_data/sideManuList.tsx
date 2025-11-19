import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export interface SellerMenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export const sideManuList: SellerMenuItem[] = [
  { title: 'Dashboard', link: '/seller-dashboard-home', icon: <DashboardIcon sx={{ fontSize: 20 }} /> },
  { title: 'Properties', link: '/seller-properties', icon: <ApartmentIcon sx={{ fontSize: 20 }} /> },
  { title: 'Rent/Sell Request', link: '/seller-rent-requests', icon: <TagRoundedIcon sx={{ fontSize: 20 }} /> },
  { title: 'Rent/Sell Hisory', link: '/seller-rent-sell-history', icon: <BusinessCenterSharpIcon sx={{ fontSize: 20 }} /> },
  { title: 'Inbox', link: '/seller-inbox', icon: <MdOutlineForwardToInbox style={{ fontSize: 20 }} /> },
  { title: 'Profile', link: '/seller-profile', icon: <CgProfile style={{ fontSize: 20 }} /> },
];
