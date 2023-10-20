import styled from 'styled-components';
import bgImage from '../../images/picture-min.png';

export const TweetsBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
`;

export const TweetItem = styled.li`
    width: 380px;
    padding: 36px;
    border-radius: 20px;
    background: 
        linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%),
        url(${bgImage});
    background-repeat: no-repeat;
    background-position: 50% 100%;
    box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;


export const ImageMainCard = styled.img`
    margin-left: 36px;
    margin-right: 36px;
    margin-bottom: 18px;
`;

export const BorderAvatar = styled.div`
    width: 62px;
    margin: 0 auto;
    margin-bottom: 26px;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    border-radius: 50%;
    border: solid 8px #EBD8FF;
`;

export const Avatar = styled.img`
    width: 62px;
    border-radius: 50%;
    margin: 0 auto;
`;

export const TextContainer = styled.div`
    text-align: center;
`;

export const TextTweets = styled.p`
    margin-bottom: 16px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #EBD8FF;
`;

export const BoxForButton = styled.div`
    margin-top: 10px;
    text-align: center;
`;

export const ButtonFollow = styled.button`
    padding: 14px 28px;
    width: 196px;
    border-radius: 10.311px;
    border-color: transparent;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

    color: #373737;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;  
`;