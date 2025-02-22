import React from "react";
import {
  OverviewContainer,
  OverviewItem,
  Section,
  VerticalSeparator,
  Title,
  Value,
  Change,
  Subtitle,
  IconWrapper,
} from "./AssesmentOverview.Styles";

const AssessmentOverview = () => {
  return (
    <OverviewContainer>
      {/* Section 1: Total Assessment */}
      <Section>
        <OverviewItem>
          <IconWrapper className="material-icons">assignment</IconWrapper>
          <div>
            <Title>Total Assessment</Title>
            <Value>34</Value>
          </div>
        </OverviewItem>
        <VerticalSeparator />
      </Section>

      {/* Section 2: Email  */}
      <Section>
        <OverviewItem>
          <IconWrapper className="material-icons">groups</IconWrapper>
          <div>
            <Value>
              11,145 <Change>+89</Change>
            </Value>
            <Subtitle>Total Candidates</Subtitle>
          </div>
        </OverviewItem>
        <VerticalSeparator />
        <OverviewItem>
          <div>
            <Value>
              1,14 <Change>+89</Change>
            </Value>
            <Subtitle>Who Attempted</Subtitle>
          </div>
        </OverviewItem>
      </Section>
      <VerticalSeparator />

      {/* Section 3: Candidates Source */}
      <Section>
        <OverviewItem>
          <IconWrapper className="material-icons">email</IconWrapper>
          <div>
            <Value>
              11,000 <Change>+89</Change>
            </Value>
            <Subtitle>E-mail</Subtitle>
          </div>
        </OverviewItem>
        <VerticalSeparator />

        <OverviewItem>
          <div>
            <Value>
              145 <Change>+89</Change>
            </Value>
            <Subtitle>Social Share</Subtitle>
          </div>
        </OverviewItem>
        <VerticalSeparator />
        <OverviewItem>
          <div>
            <Value>
              145 <Change>+89</Change>
            </Value>
            <Subtitle>Unique Link</Subtitle>
          </div>
        </OverviewItem>
      </Section>

      <VerticalSeparator />

      {/* Section 4: Total Purpose */}
      <Section>
        <OverviewItem>
          <IconWrapper className="material-icons">link</IconWrapper>
          <div>
            <Value>11</Value>
            <Subtitle>Total Purpose</Subtitle>
          </div>
        </OverviewItem>
      </Section>
    </OverviewContainer>
  );
};

export default AssessmentOverview;
