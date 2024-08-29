import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBackdrop from '../components/spinner';
import { Typography, Box } from '@mui/material';

const Details = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${userId}`).then((res) => setUser(res.data));
  }, [userId]);

  if (!user) return <SimpleBackdrop />;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
        backgroundImage: `url(${user.Poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        {user.Title}
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Genre: {user.Genre}
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Year: {user.Year}
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '800px' }}>
        {user.Plot}
      </Typography>
    </Box>
  );
};

export default Details;
