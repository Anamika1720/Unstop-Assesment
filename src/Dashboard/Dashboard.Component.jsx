import { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar.Components";
import AssessmentOverview from "../Components/Assesment-Overview/AsseesmentOverview.Component";
import AssessmentCard from "../Components/AssesmentCard/AssesmentCard.Component";
import NewAssessmentCard from "../Components/NewAssesmentCard/NewAssesmentCard.Component";
import AssessmentForm from "../CreateNewAssesment/AssesmentForm.Component";
import {
  AssessmentsGrid,
  Content,
  DashboardContainer,
  Header,
  MainContent,
  Text,
  Title,
  Text1,
  Divider,
  Underline,
} from "./Dashboard.Styles";

const Dashboard = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleNewAssessmentClick = () => {
    setFormVisible(true);
  };

  return (
    <DashboardContainer>
      <Sidebar />

      <MainContent>
        <Header>
          <Title>Assessment</Title>
          <Divider />
          <Title className="active">My Assessments</Title>
        </Header>
        <Underline />

        <Content>
          <Text>Assessments Overview</Text>
          <AssessmentOverview />
          <Text1>My Assessment</Text1>
          <AssessmentsGrid>
            <NewAssessmentCard onClick={handleNewAssessmentClick} />
            <AssessmentCard
              title="Math Assessment"
              date="20 Apr 2023"
              avatars={["LP"]}
            />
            <AssessmentCard
              title="Math Assessment"
              date="21 Apr 2023"
              avatars={["LP", "LL", "P", "X"]}
            />
          </AssessmentsGrid>
          {isFormVisible && (
            <AssessmentForm
              isOpen={isFormVisible}
              onClose={() => setFormVisible(false)}
            />
          )}
        </Content>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
