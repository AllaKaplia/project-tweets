import { ButtonFollow } from "./FollowButton.styled";

const FollowButton = ({ id, followingStatus, handleFollowClick }) => {
  return (
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
  );
};
  
export default FollowButton;