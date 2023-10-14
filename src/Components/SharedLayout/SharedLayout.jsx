import { Link, Outlet } from 'react-router-dom';
import { TbHomeHeart } from 'react-icons/tb';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Container } from '../Container/Container';
import { ButtonNav, Header, LinkLogo, LogoText, NavBox } from './SharedLayout.styled';
import { iconsSize } from '../../constants/iconsSize';


const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <LinkLogo to="/">
                    <BiMessageRoundedDots color='white' size={iconsSize.lg}/>
                    <LogoText>Tweets</LogoText>
                </LinkLogo>
                <NavBox>
                    <li>
                        <Link to="/" >
                            <ButtonNav type='button'>
                                <TbHomeHeart />
                                Home
                            </ButtonNav>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tweets" >
                            <ButtonNav type='button'>
                                <BiMessageRoundedDots />
                                Tweets
                            </ButtonNav>
                        </Link>
                    </li>
                </NavBox>
            </Header>
            <div>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </Container>
    )
};

export default SharedLayout;