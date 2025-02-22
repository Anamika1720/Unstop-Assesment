import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Label,
  ModalContent,
  ModalOverlay,
  RemoveButton,
  Select,
  SkillInput,
  SkillsContainer,
  SkillTag,
  Title,
  TitleContainer,
} from "./AssesmentForm.Styles";

const predefinedSkills = [
  "UI/UX and Design",
  "Web Development",
  "JavaScript",
  "React",
  "Node.js",
];

const AssessmentForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [assessmentName, setAssessmentName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState(predefinedSkills);
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    isOpen && (
      <ModalOverlay>
        <ModalContent>
          <TitleContainer>
            <Title>Create New Assessment</Title>
            <Button onClick={handleClose}>
              <span class="material-icons">close</span>
            </Button>
          </TitleContainer>

          <Label>Name of Assessment</Label>
          <Input
            type="text"
            placeholder="Type Here"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
          />

          <Label>Purpose of the Test</Label>
          <Select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="">Select</option>
            <option value="Hiring">Hiring</option>
            <option value="Evaluation">Evaluation</option>
          </Select>

          <Label>Description</Label>
          <Select
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Short">Short</option>
            <option value="Detailed">Detailed</option>
          </Select>

          <Label>Skills</Label>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillTag key={index}>
                {skill}{" "}
                <RemoveButton onClick={() => handleRemoveSkill(skill)}>
                  ×
                </RemoveButton>
              </SkillTag>
            ))}
            <SkillInput
              type="text"
              placeholder="Type here"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
            />
          </SkillsContainer>

          <Button>Save Assessment</Button>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default AssessmentForm;
