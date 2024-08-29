import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import backgroundImage from '../assets/contact0b.jpg'; // Make sure you have a background image

const Contact = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
        <IconButton color="inherit">
          <PhoneIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>
          +012345678
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
        <IconButton color="inherit">
          <EmailIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>
          contact@company.com
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4}>
        <IconButton color="inherit">
          <LocationOnIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>
          123 Company Address, City, Country
        </Typography>
      </Stack>
    </Box>
  );
};

export default Contact;
