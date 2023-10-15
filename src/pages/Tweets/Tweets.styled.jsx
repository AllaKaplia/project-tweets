import styled from 'styled-components';
import transition from '../../utils/transition';

export const BoxBtnTitleTweets = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 15px 20px;
    margin-bottom: 20px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 2.5777px 0px #FBF8FF inset, 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06), 0px -1.71846px 3.43693px 0px #AE7BE3 inset;

    color: #373737;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
`;

export const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px 25px;
    border-radius: 20px;
    border-color: violet;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
    color: #EBD8FF;
    cursor: pointer;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    transition: background ${transition};

    &:hover{
        color: #471CA9;
        background: #EBD8FF;
    }
`;

export const LoadMore = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px 25px;
    border-radius: 20px;
    border-color: violet;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
    color: #EBD8FF;
    cursor: pointer;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: background ${transition};

    &:hover{
        color: #471CA9;
        background: #EBD8FF;
    }
`;