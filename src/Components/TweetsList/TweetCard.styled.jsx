import styled from 'styled-components';
import bgImage from '../../images/picture-min.png';
import bgImage2x from '../../images/picture@2x-min.png';


export const TweetItem = styled.li`
    width: 380px;
    height: 460px;
    padding: 20px 20px 36px;
    border-radius: 20px;
    position: relative;
    background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
    );

    box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
    position: relative;
    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow:
        0px 3.43693px 2.5777px 0px #fbf8ff inset,
        0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
        0px -1.71846px 3.43693px 0px #ae7be3 inset;
    }
`;


export const ImageBackground = styled.div`
    background-image: url(${bgImage});
    background-position: top center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImage2x});
    }
`;

export const BorderAvatar = styled.div`
    width: 62px;
    margin: 0 auto;
    margin-bottom: 26px;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    border-radius: 50%;
    border: solid 8px #EBD8FF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 26px;
`;

export const Avatar = styled.img`
    width: 62px;
    border-radius: 50%;
    margin: 0 auto;
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    margin-top: 390px;
    text-align: center;
`;

// export const ButtonFollow = styled.button`
//     background: #EBD8FF;

//     display: flex;
//     width: 196px;
//     padding: 14px 28px;
//     justify-content: center;
//     align-items: center;
//     gap: 6px;
//     border-radius: 10.311px;
//     box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
//     color: #373737;
//     font-family: inherit;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: normal;
//     text-transform: uppercase;
//     border: none;
// `;