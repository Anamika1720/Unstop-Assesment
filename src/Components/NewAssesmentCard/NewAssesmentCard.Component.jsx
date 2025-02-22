import {
  CardContainer,
  PlusIconContainer,
  PlusIcon,
  Title,
  Text,
} from "./NewAssesment.Styles";

const NewAssessmentCard = ({ onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <PlusIconContainer>
        <PlusIcon>+</PlusIcon>
      </PlusIconContainer>
      <Title>New Assessment</Title>
      <Text>
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </Text>
    </CardContainer>
  );
};

export default NewAssessmentCard;
