import { Link } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    color: #EBD8FF;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (min-width: 678px) {
        gap: 10px;
        justify-content:  flex-start;
    }

    @media (min-width: 1115px) {
        gap: 60px;
    }
`;

export const LogoText = styled.span`
    font-size: 18px;
    color: #EBD8FF;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    @media (min-width: 678px) {
        font-size: 20px;
    }

    @media (min-width: 1115px) {
        font-size: 30px;
    }
`;

export const LinkLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const NavBox = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (min-width: 678px) {
        gap: 10px;
    }

    @media (min-width: 1152px) {
        gap: 30px;
    }
`;

export const ButtonNav = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 20px;
    border-color: violet;
    background: linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
    color: #EBD8FF;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;

    transition: background ${transition};

    &:hover{
        color: #471CA9;
        background: #EBD8FF;
    }

    @media (min-width: 678px) {
        padding: 5px 10px;

        font-size: 15px;
        font-weight: 500;
        gap: 15px;
    }

    @media (min-width: 1115px){
        padding: 10px 25px;

        font-size: 25px;
        font-weight: 500;
    }
`;