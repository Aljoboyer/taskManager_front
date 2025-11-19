import React from 'react';
import { FaTasks } from "react-icons/fa";

export interface SellerMenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export const sideManuList: SellerMenuItem[] = [
  { title: 'Tasks', link: '/tasks', icon: <FaTasks style={{ fontSize: 20 }} /> }
];
