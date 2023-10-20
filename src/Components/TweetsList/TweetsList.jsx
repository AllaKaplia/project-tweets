import React, { useEffect, useState, useRef } from 'react';
import mainCardImage from '../../images/picture-min.png';
import mainCardImage2x from '../../images/picture@2x-min.png';
import mainCardImage3x from '../../images/picture@3x-min.png';
import { TweetItem, TweetsBox, ImageMainCard, Avatar, BorderAvatar, TextContainer, TextTweets, BoxForButton, ButtonFollow } from './TweetsList.styled';
import IconGoIT from '../IconGoIT/IconGoIT';
import { updateFollowers } from '../../Services/Services';

const TweetsList = ({ tweets }) => {
  const [followingStatus, setFollowingStatus] = useState({});
  const [followersCount, setFollowersCount] = useState({});
  const containerRef = useRef();

  const saveFollowingStatusToLocalStorage = (status) => {
    localStorage.setItem('followingStatus', JSON.stringify(status));
  };

  const handleFollowClick = async (userId, isFollowing) => {
    try {
      const updatedUser = await updateFollowers(userId, isFollowing ? -1 : 1);
      setFollowingStatus((prevStatus) => {
        const newStatus = { ...prevStatus };
        newStatus[userId] = !isFollowing;
        saveFollowingStatusToLocalStorage(newStatus);
  
        const newFollowersCount = { ...followersCount };
        newFollowersCount[userId] = updatedUser.followers;
        setFollowersCount(newFollowersCount);
  
        return newStatus;
      });
    } catch (error) {
      console.error('An error occurred while executing the user update request:', error);
    }
  };
  

  useEffect(() => {
    const storedData = localStorage.getItem('followingStatus');
    if (storedData) {
      setFollowingStatus(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <TweetsBox ref={containerRef}>
        {tweets.map(({ id, user, avatar, tweets, followers }) => (
          <TweetItem key={id}>
            <IconGoIT />
            <picture>
              <source srcSet={`${mainCardImage2x} ${mainCardImage3x} media="(min-width: 800px)"`} />
              <source srcSet={mainCardImage} />
              <ImageMainCard src={mainCardImage} alt="Main card" width={308} />
            </picture>
            <BorderAvatar>
              <Avatar src={avatar} alt={user} />
            </BorderAvatar>
            <TextContainer>
              <TextTweets>{tweets} TWEETS</TextTweets>
              <TextTweets>{followersCount[id] || followers} FOLLOWERS</TextTweets>
            </TextContainer>
            <BoxForButton>
              <ButtonFollow
                type="button"
                onClick={() => handleFollowClick(id, followingStatus[id])}
                style={{
                  backgroundColor: followingStatus[id] ? '#5CD3A8' : '#EBD8FF',
                  color: followingStatus[id] ? '#373737' : '#373737',
                }}
              >
                {followingStatus[id] ? 'Following' : 'Follow'}
              </ButtonFollow>
            </BoxForButton>
          </TweetItem>
        ))}
      </TweetsBox>
    </div>
  );
};

export default TweetsList;
