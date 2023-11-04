import { useEffect, useState } from 'react';
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { getAllTweets } from '../../Services/Services';
import Loader from '../../Components/Loader/Loader';
import { Container } from '../../Components/Container/Container';
import { GoBackButton, BoxBtnTitleTweets, LoadMore } from './Tweets.styled';
import { iconsSize } from '../../constants/iconsSize';
import { Box } from '../../Components/Box/Box';
import TweetCard from '../../Components/TweetsList/TweetCard';

const Tweets = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [loadedCards, setLoadedCards] = useState(4);

  useEffect(() => {
    const loadUsers = async () => {
      if (reachedEnd) return;
      setIsLoading(true);

      try {
        const usersData = await getAllTweets(page);
        if (usersData.length === 0) {
          setReachedEnd(true);
        }
        setAllUsers((prevUsers) => [...prevUsers, ...usersData]);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page, reachedEnd]);

  const handleButtonLoadMore = () => {
    setLoadedCards((prevLoadedCards) => prevLoadedCards + 4);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <BoxBtnTitleTweets>
        <Link to="/">
          <GoBackButton type="button" >
            <TbArrowBackUpDouble size={iconsSize.md}/>
            Go back Home
          </GoBackButton>
        </Link>
        <h1>Tweets from users of the platform</h1>
      </BoxBtnTitleTweets>
      <Box>
      {allUsers.slice(0, loadedCards).map((user, index) => (
        <TweetCard key={user.id + index} {...user} />
      ))}
      {loading && <Loader />}
      {error && <div>{error}</div>}
      </Box>
      {!reachedEnd && (
        <LoadMore type="button" onClick={handleButtonLoadMore}>
          Load More
        </LoadMore>)}
    </Container>
  )
};

export default Tweets;
