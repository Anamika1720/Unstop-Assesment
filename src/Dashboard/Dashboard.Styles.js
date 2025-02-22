import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  width: 276px;
  height: 70px;
  gap: 20px;
`;

export const Button1 = styled.span`
  width: 120;
  height: 28;
  font-weight: bold;
  font-size: 26px;
`;

export const Button2 = styled.span`
  width: 116;
  height: 70;
  gap: 20px;
  font-weight: bold;
  font-size: 26px;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 20px;
`;

export const AssessmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const Text = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #383838;
`;

export const Text1 = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #383838;
`;

export const Link = styled.a`
  font-size: 16px;
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #007bff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
  margin-right: 20px;
  position: relative;
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #dde5ea;
  margin-right: 20px;
`;

export const Underline = styled.div`
  width: 110px;
  height: 3px;
  background: #007bff;
  margin-top: -2px;
`;

export const HorizontalLine = styled.hr`
  width: 120px;
  border: none;
  margin: 0;
`;
