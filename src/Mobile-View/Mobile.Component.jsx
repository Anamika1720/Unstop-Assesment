import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaFilter } from "react-icons/fa";
import Sidebar from "../Components/SideBar/Sidebar.Components";
import AssessmentCard from "../Components/AssesmentCard/AssesmentCard.Component";
import AssessmentForm from "../CreateNewAssesment/AssesmentForm.Component";
import {
  Container,
  Navbar,
  MenuIcon,
  SidebarTab,
  CloseIcon,
  Content,
  NewAssessmentButton,
  TitleContainer,
  Tab,
  TabUnderline,
  AssessmentsGrid,
} from "./Mobile.Styles";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("myAssessments");

  const handleNewAssessmentClick = () => {
    setFormVisible(true);
  };

  return (
    <Container>
      <Navbar>
        <MenuIcon onClick={() => setIsOpen(true)}>
          <FaBars />
          <span>Assessment</span>
        </MenuIcon>
      </Navbar>
      <SidebarTab open={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseIcon>
        <Sidebar />
      </SidebarTab>

      {/* Tabs Section */}
      <TitleContainer>
        <Tab
          $active={activeTab === "myAssessments"}
          onClick={() => setActiveTab("myAssessments")}
        >
          My Assessments
          {activeTab === "myAssessments" && <TabUnderline />}
        </Tab>
        <Tab
          active={activeTab === "unstopAssessments"}
          onClick={() => setActiveTab("unstopAssessments")}
        >
          Unstop Assessments
          {activeTab === "unstopAssessments" && <TabUnderline />}
        </Tab>
      </TitleContainer>

      <Content style={{ opacity: isOpen ? 0.5 : 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h3>My Assessment</h3>
          <FaSearch style={{ marginRight: "10px" }} />
          <FaFilter />
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px dashed #ccc",
            borderRadius: "8px",
          }}
        >
          <h1>+</h1>
          <NewAssessmentButton onClick={handleNewAssessmentClick}>
            New Assessment
          </NewAssessmentButton>
          <p style={{ marginTop: "10px" }}>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        <AssessmentsGrid>
          {Array.from({ length: 6 }, (_, index) => (
            <AssessmentCard
              key={index}
              title={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  Math Assessment
                </div>
              }
              date={`20 Apr 2023`}
              avatars={["LP", "LL", "P", "X"]}
            />
          ))}
        </AssessmentsGrid>

        {formVisible && (
          <AssessmentForm
            isOpen={formVisible}
            onClose={() => setFormVisible(false)}
          />
        )}
      </Content>
    </Container>
  );
};

export default MobileNavbar;
