
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const Tweets = () => {
    return (
        <div>
            <Link to="/">
                <button type="button" >
                    <TbArrowBackUpDouble />
                    <span>Go back Home</span>
                </button>
            </Link>
            <h1>Tweets</h1>
        </div>
    )
};

export default Tweets;