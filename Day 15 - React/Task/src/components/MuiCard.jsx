import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ id, Title, Year, Poster, Plot, Genre }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#1c1c1c', color: '#ffffff' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {Title ? Title[0] : "?"}
          </Avatar>
        }
        title={<Typography variant="h6" sx={{ color: '#ffffff' }}>{Title || "Unknown"}</Typography>}
        subheader={<Typography sx={{ color: '#bdbdbd' }}>{Year}</Typography>}
      />
      <CardMedia
        component="img"
        height="auto"
        image={Poster}
        alt={`${Title}'s poster`}
        sx={{ objectFit: 'cover' }}  // Ensures the image covers the container
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
          {Plot}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#e52165', marginTop: '10px' }}>
          Genre: {Genre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/users/${id}`} style={{ textDecoration: 'none' }}>
          <IconButton>
            <PersonIcon style={{ color: '#e52165' }} />
          </IconButton>
        </Link>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Additional details can be added here.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
