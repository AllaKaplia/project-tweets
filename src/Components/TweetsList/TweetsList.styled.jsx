import styled from 'styled-components';

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
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;