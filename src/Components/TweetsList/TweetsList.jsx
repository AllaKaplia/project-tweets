import mainCardImage from '../../images/picture-min.png';
import mainCardImage2x from '../../images/picture@2x-min.png';
import mainCardImage3x from '../../images/picture@3x-min.png';
import { TweetItem, TweetsBox } from './TweetsList.styled';
import IconGoIT from '../IconGoIT/IconGoIT';


const TweetsList = ({tweets}) => {
    return (
        <div>
            <TweetsBox>
                {tweets.map(({ id, user, avatar, tweets, followers}) => (
                    <TweetItem key={id}>
                        <IconGoIT />
                        <picture>
                            <source srcSet={`${mainCardImage2x} ${mainCardImage3x}  media="(min-width: 800px)"`} />
                            <source srcSet={mainCardImage} />
                            <img src={mainCardImage} alt="Main card" width={308} />
                        </picture>
                        <img src={avatar} alt={user} />
                        <p>{tweets} TWEETS</p>
                        <p>{followers} FOLLOWERS</p>
                        <button type="button">
                            FOLLOW
                        </button>
                    </TweetItem>
                ))}
            </TweetsBox>
        </div>
    )
};

export default TweetsList;