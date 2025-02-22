import styled from "styled-components";

export const CardContainer = styled.div`
  background: #f6f8fa;
  padding: 24px;
  border-radius: 12px;
  border: 2px dashed #e0e0e0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #007bff;
  }
`;

export const PlusIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PlusIcon = styled.div`
  font-size: 32px;
  color: #007bff;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 80%;
`;
