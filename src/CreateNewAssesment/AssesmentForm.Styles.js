import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
     width: 95%;
    padding: 13px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 14px;
}
`;

export const Select = styled.select`
     width: 100%;
    padding: 13px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 14px;
}
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SkillTag = styled.div`
  background: #e0e7ff;
  color: #383838;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RemoveButton = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: #ff4d4d;
`;

export const SkillInput = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const Button = styled.button``;
