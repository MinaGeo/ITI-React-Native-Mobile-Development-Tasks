import { useContext } from 'react';
import RecipeReviewCard from './MuiCard';
import SimpleBackdrop from './spinner';
import { usersContext } from '../contexts/usersContextProvider';
import { styled } from '@mui/material/styles';

const UsersContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  padding: '20px',
  background: 'url(https://th.bing.com/th/id/R.84f57bb9c012a8bd52d43b5395ff7c5b?rik=Jnmh109190gKRQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fFree-Dark-Blue-Wallpaper-High-Quality.jpg&ehk=5DnnoiKuCyljqi0vk%2bcnNo3oHPSSc%2b5UtieTz52D3Xs%3d&risl=&pid=ImgRaw&r=0) no-repeat center center fixed',
  backgroundSize: 'cover',
}));

const Users = () => {
  const { usersArr } = useContext(usersContext);

  if (!usersArr) return <SimpleBackdrop />;

  return (
    <div>
      <UsersContainer>
        {usersArr.map((u) => (
          <RecipeReviewCard
            key={u.id}
            id={u.id}
            Title={u.Title}
            Year={u.Year}
            Poster={u.Poster}
            Plot={u.Plot}
            Genre={u.Genre}
          />
        ))}
      </UsersContainer>
    </div>
  );
}

export default Users;
