import { Link } from "react-router-dom";
import { TbArrowBackUpDouble } from 'react-icons/tb';


const NotFound = () => {
    return(
        <div>
            <Link to="/">
                <button type="button" >
                    <TbArrowBackUpDouble />
                    <span>Go back Home</span>
                </button>
            </Link>
            <h3>This page does not exist or has been removed by moderators</h3>
            
        </div>
    )
};

export default NotFound;