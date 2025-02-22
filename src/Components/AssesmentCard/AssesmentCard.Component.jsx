import {
  Card,
  IconWrapper,
  Title,
  Subtitle,
  Info,
  ShareButton,
  AvatarGroup,
  Avatar,
  Options,
} from "./Assesment.Styles";

const AssessmentCard = ({ title, date, avatars = [] }) => {
  return (
    <Card>
      <IconWrapper>
        <span className="material-icons">work</span>
      </IconWrapper>
      <Title>{title}</Title>
      <Subtitle>
        <strong>Job</strong>
        <span className="material-icons" style={{ fontSize: "14px" }}>
          event
        </span>{" "}
        {date}
      </Subtitle>
      <Info>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            00 <span style={{ fontSize: "12px", color: "#888" }}>Duration</span>
          </div>
          <div>
            00{" "}
            <span style={{ fontSize: "12px", color: "#888" }}>Questions</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ShareButton>
            <span className="material-icons" style={{ fontSize: "14px" }}>
              share
            </span>
            Share
          </ShareButton>
          <AvatarGroup>
            {avatars.slice(0, 2).map((avatar, index) => (
              <Avatar key={index}>{avatar}</Avatar>
            ))}
            {avatars.length > 2 && <Avatar>+{avatars.length - 3}</Avatar>}
          </AvatarGroup>
        </div>
      </Info>
      <Options>⋮</Options>
    </Card>
  );
};

export default AssessmentCard;
