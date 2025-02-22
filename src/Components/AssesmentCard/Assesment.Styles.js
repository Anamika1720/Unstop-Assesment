import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const IconWrapper = styled.div`
  background: #f4f3ff;
  padding: 10px;
  border-radius: 8px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .material-icons {
    color: #7a7adb;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #e7f0ff;
  color: #007bff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #d0e1ff;
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* Adjusted spacing */
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background: #7a7adb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid white;
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Options = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #888;
`;
