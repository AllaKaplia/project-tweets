import items from './popularTweets.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from '../../Components/Container/Container';
import { CardBox, ContainerTweetsText, ImgCard, Section, TitleHome } from './Home.styled';

const Home = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        focusOnSelect: true,
        infinite: true,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <Section>
                <TitleHome>Popular tweets</TitleHome>
                <Slider {...settings} className="slider">
                    {items.map((item) => (
                        <CardBox className="slick-slide" key={item.id}>
                            <ImgCard src={item.image} alt={item.title} width={180} height={300}/>
                            <ContainerTweetsText>
                                <h3>{item.title}</h3>
                                <h5>{item.subtitle}</h5>
                                <p>{item.text}</p>
                            </ContainerTweetsText>
                        </CardBox>
                    ))}
                </Slider>
            </Section>
        </Container>
    );
};

export default Home;
