import styled from "styled-components";

export const OverviewContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

export const OverviewItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const IconWrapper = styled.span`
  font-size: 24px;
  color: #7a7adb;
  background: #f0efff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #334155;
`;

export const Value = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #0f172a;
  display: flex;
  align-items: center;
`;

export const Change = styled.span`
  font-size: 12px;
  color: #28a745;
  margin-left: 5px;
  font-weight: 500;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  color: #64748b;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  background: #e2e8f0;
  height: 80px;
  margin: 0 15px;
`;
