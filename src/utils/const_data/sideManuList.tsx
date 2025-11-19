import React from 'react';
import { FaTasks } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";

export interface SellerMenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export const sideManuList: SellerMenuItem[] = [
  { title: 'Tasks', link: '/dashboard/tasks', icon: <FaTasks style={{ fontSize: 20 }} /> },
  { title: 'Create Task', link: '/dashboard/create-task', icon: <MdAddToPhotos style={{ fontSize: 20 }} /> },

];
