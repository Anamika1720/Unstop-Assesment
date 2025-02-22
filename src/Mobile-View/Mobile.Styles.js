import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    display: none; // Hide on larger screens
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
  margin-right: 20px;
  position: relative;
`;

export const MenuIcon = styled.div`
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SidebarTab = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 999;

  ${({ open }) =>
    open &&
    `
    transform: translateX(0);
  `}
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const SidebarLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  li {
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      background: #444;
    }
  }
`;

export const Content = styled.div`
  padding: 2rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem 4rem; // Adjust padding for larger screens
  }
`;

export const AssessmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const NewAssessmentButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const Tab = styled.div`
  padding: 10px;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    `
    background-color: #f0f0f0; /* Example style for active state */
  `}
`;

export const TabUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #007bff;
`;
