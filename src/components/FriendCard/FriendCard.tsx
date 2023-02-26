import { FriendCardStyled } from "./FriendCardStyled";

const FriendCard = (): JSX.Element => {
  return (
    <FriendCardStyled className="friend-card">
      <div className="info">
        <span>Name:</span>
        <span>Age:</span>
        <span>Country:</span>
      </div>
      <img src="perfil.webp" alt="standard profile" />
    </FriendCardStyled>
  );
};

export default FriendCard;
