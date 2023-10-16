import { useEffect, useRef, useState } from 'react';
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { getAllTweets } from '../../Services/Services';
import Loader from '../../Components/Loader/Loader';
import TweetsList from '../../Components/TweetsList/TweetsList';
import { Container } from '../../Components/Container/Container';
import { GoBackButton, BoxBtnTitleTweets, LoadMore } from './Tweets.styled';
import { iconsSize } from '../../constants/iconsSize';



const Tweets = () => {
  const [perPage, setPerPage] = useState(4);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef();
  const currentPage = 1;

  const abortCtrl = useRef();

  useEffect(() => {
    const getTweets = async () => {
      try {
        if (abortCtrl.current) {
          abortCtrl.current.abort();
        }

        abortCtrl.current = new AbortController();

        setLoading(true);
        setError(null);

        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;

        const tweets = await getAllTweets(abortCtrl.current.signal);

        const usersToDisplay = tweets.slice(startIndex, endIndex);

        if (usersToDisplay.length < perPage) {
          setHasMore(false);
        }

        setAllUsers(prevUsers => {
          const existingIds = prevUsers.map(user => user.id);
          const newUsers = usersToDisplay.filter(user => !existingIds.includes(user.id));
          return [...prevUsers, ...newUsers];
        });

        setLoading(false);

        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError("Sorry, an error occurred. Try reloading the page!");
        }
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      getTweets();
    }
  }, [currentPage, perPage, hasMore]);

  const loadMoreTweets = () => {
    if (hasMore) {
      setLoading(true);
      setPerPage(perPage + 4);
    }
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
      {loading && <Loader />}
      {!loading && allUsers.length > 0 ? (
        <TweetsList tweets={allUsers} />
        ) : (
        <span>No tweets found</span>
      )}
      {error && <div>{error}</div>}

      <LoadMore type="button" onClick={loadMoreTweets}>
        Load More
      </LoadMore>
    </Container>
  )
};

export default Tweets;