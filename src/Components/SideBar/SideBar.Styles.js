import styled from "styled-components";
export const SidebarContainer = styled.div`
  width: 140px;
  height: 100vh;
  top: 2px;
  padding: 10px 20px 20px 30px;
  gap: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  aign-items: center;
`;

export const Container = styled.div`
  width: 90px;
  height: 361px;
  gap: 16px;
`;

export const Container1 = styled.div`
  width: 90px;
  padding-bottom: 10px;
  gap: 2px;
`;

export const Container2 = styled.div`
  width: 90px;
  height: 120px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 24px;
  margin-bottom: 20px;
  color: #383838;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  gap: 6px;
  border-radius: 8px;
`;

export const Icon = styled.span`
  font-size: 20px;
  color: #383838;
`;

export const Admin = styled.span`
  padding: 6px 8px;
  border-radius: 22px;
  border: 1px solid #d63500;
  font-size: 10px;
  background: #fbebea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  box-sizing: border-box;
`;

export const Text = styled.span`
  font-family: Inter;
  font-size: 12px;
  line-height: 16.8px;
  white-space: nowrap;
`;

export const Text1 = styled.span`
  font-family: Inter;
  font-size: 12px;
  line-height: 16.8px;
  letter-spacing: 0px;
`;
