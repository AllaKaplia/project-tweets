import React, { useEffect, useState, useRef } from 'react';
import { TweetItem, ImageBackground, Avatar, BorderAvatar, TextContainer, TextTweets } from './TweetCard.styled';
import IconGoIT from '../IconGoIT/IconGoIT';
import { updateFollowers } from '../../Services/Services';
import FollowButton from '../FollowButton/FollowButton';

const TweetCard = ({ id, user, avatar, tweets, followers }) => {
  const [followingStatus, setFollowingStatus] = useState({});
  const containerRef = useRef();
  const [followersCount, setFollowersCount] = useState(followers);

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
    <>
      <TweetItem ref={containerRef}>
        <IconGoIT />
        <ImageBackground />
          <BorderAvatar>
            <Avatar src={avatar} alt={user} />
          </BorderAvatar>
          <TextContainer>
            <TextTweets>{tweets.toLocaleString('en-US')} TWEETS</TextTweets>
            <TextTweets>{followersCount[id] || followers.toLocaleString('en-US')} FOLLOWERS</TextTweets>
          </TextContainer>

          <FollowButton id={id}
            followingStatus={followingStatus}
            handleFollowClick={handleFollowClick}
          />
      </TweetItem>
    </>
  );
};

export default TweetCard;
