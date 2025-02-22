import { styled } from "styled-components";
import TotalBlock from "./TotalBlock/TotalBlock";
import { MdOutlineViewAgenda } from "react-icons/md";
import Candidate from "./candidates/Candidates";
import People from "/people.png";
import Web from "/web.png";
import { useEffect, useState } from "react";
const cardData = [
  {
    type: "TotalBlock",
    heading: "Total Assessment",
    number: 34,
    icons: MdOutlineViewAgenda,
    flex: "12%",
    orderMobile: 1,
    orderDesktop: 1,
    mobile: {
      order: 1,
      flex: "40%",
    },
    desktop: {
      order: 1,
      flex: "12%",
    },
  },
  {
    type: "Candidate",
    heading: "Candidate",
    title1: "Total Candidate",
    title2: "Who Attamped",
    number: "11,145",
    number2: "1,14",
    smallnum1: "+89",
    smallnum2: "+89",
    image: People,
    bg: "red",
    color: "white",
    flex: "26%",
    orderMobile: 3,
    orderDesktop: 2,
    mobile: {
      order: 3,
      flex: "26%",
    },
    desktop: {
      order: 2,
      flex: "26%",
    },
  },
  {
    type: "Candidate",
    heading: "Candidate Source",
    title1: "Email",
    title2: "Social Share",
    number: "11,000",
    number2: "145",
    number3: 145,
    title3: "Unique Link",
    smallnum1: "+89",
    smallnum2: "+89",
    smallnum3: "+89",
    image: Web,
    bg: "blue",
    color: "yellow",
    flex: "38%",
    orderMobile: 4,
    orderDesktop: 3,
    mobile: {
      order: 4,
      flex: "38%",
    },
    desktop: {
      order: 3,
      flex: "38%",
    },
  },
  {
    type: "TotalBlock",
    heading: "Total Purpose",
    number: 11,
    icons: MdOutlineViewAgenda,
    flex: "10%",
    orderMobile: 2,
    orderDesktop: 4,
    mobile: {
      order: 2,
      flex: "40%",
    },
    desktop: {
      order: 4,
      flex: "10%",
    },
  },
];

const AssessmentsOverview = () => {
  return (
    <Assessment>
      <Heading>Assessments Overview</Heading>
      <OverviewBox>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </OverviewBox>
    </Assessment>
  );
};

// const Card = ({ type, ...props }) => {
//   if (type === "TotalBlock") {
//     return (
//       <div style={{ flex: props.flex }}>
//         <TotalBlock {...props} />
//       </div>
//     );
//   } else if (type === "Candidate") {
//     return (
//       <div style={{ flex: props.flex }}>
//         <Border>
//           <Candidate {...props} />
//         </Border>
//       </div>
//     );
//   }
//   return null;
// };

const Card = ({ type, ...props }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const styles = windowWidth <= 768 ? props.mobile : props.desktop;

  console.log("Style: ", styles, windowWidth);
  return (
    <div style={{ ...styles }}>
      {type === "TotalBlock" ? (
        <TotalBlock {...props} />
      ) : type === "Candidate" ? (
        <Border>
          <Candidate {...props} />
        </Border>
      ) : null}
    </div>
  );
};

const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 0.5em;
  background-color: #ffffff;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  color: #1c4980;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
`;

const OverviewBox = styled.div`
  display: flex;
  border: 2px solid #dde5ea;
  border-radius: 10px;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Border = styled.div`
  border: 2px solid #dde5ea;
  margin: -1px;
`;

export default AssessmentsOverview;
