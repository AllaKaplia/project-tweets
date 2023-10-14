import { useEffect, useRef, useState } from 'react';
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import getAllTweets from '../../Services/Services';
import Loader from '../../Components/Loader/Loader';
import TweetsList from '../../Components/TweetsList/TweetsList';
import { Store } from 'react-notifications-component';
import { Container } from '../../Components/Container/Container';



const Tweets = () => {
    const [tweetsList, setTweetsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const abortCtrl = useRef();

    useEffect(() => {
        const getTweets = async () => {
            try {
                if (abortCtrl.current) {
                    abortCtrl.current.abort();
                };

                abortCtrl.current = new AbortController();

                setLoading(true);
                setError(null);

                const tweets = await getAllTweets(abortCtrl.current.signal);

                setTweetsList(tweets);
                setLoading(false);
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError("Sorry, an error occurred :( Try reloading the page!");
                    setLoading(false);
                }
            } finally {
                setLoading(false);
            }
        };

        getTweets();

    }, []);

    return (
        <Container>
            <Link to="/">
                <button type="button" >
                    <TbArrowBackUpDouble />
                    <span>Go back Home</span>
                </button>
            </Link>
            <h1>Tweets from users of the platform</h1>
            {loading && <Loader />}
            {!loading && tweetsList.length > 0 ? (
                <TweetsList tweets={tweetsList} />
            ) : (
                <span>No tweets found</span>
            )}
            {error && Store.addNotification({
                ...error.message,
                type: "danger",
                container: 'center',
            })}
        </Container>
    )
};

export default Tweets;