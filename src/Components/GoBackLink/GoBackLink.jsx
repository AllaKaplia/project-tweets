import { NavLink } from "react-router-dom";
import { TbArrowBackUpDouble } from 'react-icons/tb';


const GoBackLink = ({ to }) => {
    return(
        <div>
            <NavLink to={to}>
                <button type="button" >
                    <TbArrowBackUpDouble />
                    <span>Go back Home</span>
                </button>
            </NavLink>
        </div>
    )
}