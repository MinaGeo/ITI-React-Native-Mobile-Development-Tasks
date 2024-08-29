import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

const NavbarContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#0d1324',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '8px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: '#1d2a3d',
    color: '#e52165',
  },
  '&.active': {
    backgroundColor: '#1d2a3d',
    color: '#e52165',
  }
}));

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/users/add">Add Movie</NavLink>
    </NavbarContainer>
  );
};

export default NavBar;
