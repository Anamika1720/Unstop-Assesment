import React from "react";
import { styled } from "styled-components";

const MathAssessments = () => {
  return (
    <MainContainer>
      <IconBox>
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="50" rx="12" fill="#EBE8FD" />
            <path
              d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z"
              fill="#6548EE"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="17"
            viewBox="0 0 5 17"
            fill="none"
          >
            <path
              d="M2.41667 4.66667C3.56726 4.66667 4.5 3.73393 4.5 2.58333C4.5 1.43274 3.56726 0.5 2.41667 0.5C1.26607 0.5 0.333334 1.43274 0.333334 2.58333C0.333334 3.73393 1.26607 4.66667 2.41667 4.66667Z"
              fill="#1C4980"
            />
            <path
              d="M2.41667 10.5C3.56726 10.5 4.5 9.56726 4.5 8.41667C4.5 7.26607 3.56726 6.33333 2.41667 6.33333C1.26607 6.33333 0.333334 7.26607 0.333334 8.41667C0.333334 9.56726 1.26607 10.5 2.41667 10.5Z"
              fill="#1C4980"
            />
            <path
              d="M2.41667 16.3333C3.56726 16.3333 4.5 15.4006 4.5 14.25C4.5 13.0994 3.56726 12.1667 2.41667 12.1667C1.26607 12.1667 0.333334 13.0994 0.333334 14.25C0.333334 15.4006 1.26607 16.3333 2.41667 16.3333Z"
              fill="#1C4980"
            />
          </svg>
        </div>
      </IconBox>
      <Title>
        <p className="heading">Math Assessment</p>
        <div className="flex">
          <div>Job</div>
          <Line></Line>
          <div>
            <div className="calendar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                fill="none"
                viewBox="0 0 12 13"
              >
                <path
                  fill="#8DA4BF"
                  d="M7.995 9.123l.865-.857-2.254-2.254V2.846H5.394V6.52l2.601 2.603zM6 12.5c-.83 0-1.607-.156-2.334-.469a6.045 6.045 0 01-3.198-3.2A5.87 5.87 0 010 6.494a5.953 5.953 0 011.756-4.244A6.11 6.11 0 013.668.969 5.87 5.87 0 016.007.5c.83 0 1.61.157 2.34.472a6.049 6.049 0 011.901 1.282c.54.54.966 1.174 1.28 1.903.315.73.472 1.51.472 2.343 0 .83-.156 1.607-.469 2.334a6.117 6.117 0 01-1.28 1.91A5.947 5.947 0 016 12.5zm.007-1.27c1.309 0 2.423-.462 3.343-1.385.92-.924 1.38-2.041 1.38-3.352s-.46-2.426-1.38-3.345C8.43 2.23 7.316 1.77 6.007 1.77c-1.308 0-2.425.46-3.35 1.378-.925.919-1.387 2.034-1.387 3.345 0 1.31.462 2.428 1.387 3.352.925.923 2.042 1.385 3.35 1.385z"
                ></path>
              </svg>
              <p className="date">20 Apr 2023</p>
            </div>
          </div>
        </div>

        <DashedLine>
          <div className="line"></div>
        </DashedLine>

        <Part3>
          <div className="box1">
            <div className="num-title">
              00
              <div className="duration">Duration</div>
            </div>
            <div className="num-title">
              00
              <div className="duration">Questions</div>
            </div>
          </div>
          <Sharebox>
            <Share>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.18075 2.10614L4.82373 4.46316L6.00224 5.64168L8.35927 3.28465C9.33154 2.31238 10.9225 2.31238 11.8948 3.28465C12.8671 4.25692 12.8671 5.84792 11.8948 6.82019L9.53778 9.17721L10.7163 10.3557L13.0733 7.9987C14.6997 6.37235 14.6997 3.73249 13.0733 2.10614C11.447 0.479796 8.8071 0.479796 7.18075 2.10614ZM8.35927 10.3557L6.00224 12.7127C5.02997 13.685 3.43898 13.685 2.46671 12.7127C1.49444 11.7405 1.49444 10.1495 2.46671 9.17721L4.82373 6.82019L3.64522 5.64168L1.2882 7.9987C-0.338148 9.62504 -0.338148 12.2649 1.2882 13.8913C2.91454 15.5176 5.55441 15.5176 7.18075 13.8913L9.53778 11.5342L8.35927 10.3557ZM4.23448 9.76647L8.94852 5.05242L10.127 6.23093L5.41299 10.945L4.23448 9.76647Z"
                  fill="#1C4980"
                />
              </svg>

              <div>Share</div>
            </Share>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="30"
              fill="none"
              viewBox="0 0 59 30"
            >
              <rect
                width="29"
                height="29"
                x="0.68"
                y="0.5"
                fill="#6548EE"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="0.68"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M7.561 20.5V10.318h2.153v8.407h4.365V20.5H7.561zm7.944 0V10.318h4.017c.772 0 1.43.148 1.974.443.543.291.957.697 1.242 1.218.289.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.291.516-.714.919-1.267 1.207-.55.289-1.217.433-1.999.433h-2.56v-1.725h2.212c.414 0 .756-.072 1.024-.214.272-.146.474-.346.607-.602.136-.258.204-.555.204-.89 0-.338-.068-.633-.204-.885a1.362 1.362 0 00-.607-.591c-.271-.143-.616-.214-1.034-.214h-1.452V20.5h-2.152z"
              ></path>
              <rect
                width="29"
                height="29"
                x="15.09"
                y="0.5"
                fill="#3079E1"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="15.09"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M21.971 20.5V10.318h2.153v8.407h4.365V20.5h-6.518zm7.944 0V10.318h4.017c.772 0 1.43.148 1.973.443.544.291.958.697 1.243 1.218.289.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.291.516-.714.919-1.267 1.207-.55.289-1.217.433-2 .433h-2.56v-1.725h2.213c.414 0 .756-.072 1.024-.214.272-.146.474-.346.607-.602.136-.258.203-.555.203-.89 0-.338-.068-.633-.203-.885a1.361 1.361 0 00-.607-.591c-.272-.143-.616-.214-1.034-.214h-1.452V20.5h-2.152z"
              ></path>
              <rect
                width="29"
                height="29"
                x="29.5"
                y="0.5"
                fill="#E9407A"
                rx="14.5"
              ></rect>
              <rect
                width="29"
                height="29"
                x="29.5"
                y="0.5"
                stroke="#fff"
                rx="14.5"
              ></rect>
              <path
                fill="#fff"
                d="M36.381 20.5V10.318h2.153v8.407h4.365V20.5H36.38zm7.943 0V10.318h4.017c.773 0 1.43.148 1.974.443.544.291.958.697 1.243 1.218.288.517.433 1.113.433 1.79 0 .676-.146 1.272-.438 1.79-.292.516-.714.919-1.268 1.207-.55.289-1.216.433-1.998.433h-2.56v-1.725h2.212c.414 0 .755-.072 1.024-.214.272-.146.474-.346.606-.602.136-.258.204-.555.204-.89 0-.338-.068-.633-.204-.885a1.361 1.361 0 00-.606-.591c-.272-.143-.617-.214-1.034-.214h-1.452V20.5h-2.153z"
              ></path>
            </svg>
          </Sharebox>
        </Part3>
      </Title>
    </MainContainer>
  );
};

export default MathAssessments;

const MainContainer = styled.div`
  display: flex;
  padding: 16px 16px 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 30%;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #dadce0;
  background-color: #fff;

  & {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  .iconimage {
    width: 50px;
    height: 50px;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 20px;
  border-left: 2px solid #dadce0;
`;
const DashedLine = styled.div`
  padding-top: 16px;
  width: 100%;
  .line {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px dashed #dadce0;
    flex: 1 0 0;
    align-self: stretch;
  }
`;

const Part3 = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  .box1 {
    display: flex;
    align-items: center;
    gap: 10px;

    .num-title {
      color: #1c4980;
      font-size: 14px;
      font-weight: 600;

      .duration {
        color: #1c4980;
        font-size: 12px;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }
`;

const Title = styled.div`
  width: 100%;
  align-items: center;
  .heading {
    color: #1c4980;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;

    .flex-title1 {
      font-weight: 600;
      line-height: 140%;
    }
  }

  .calendar {
    display: flex;
    gap: 6px;
    align-items: center;

    .date {
      color: #8da4bf;
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

const Sharebox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .circle-parent {
    display: flex;
    position: relative;
    top: -15px;
    left: -10px;
    margin: 0 10px;
  }

  .share-circle {
    display: flex;
    position: absolute;
    &:nth-child(2) {
      left: 13px;
      background-color: #3079e1;
    }
    &:nth-child(3) {
      left: 25px;
      background-color: #e9407a;
    }
    width: 30px;
    height: 30px;
    padding: 5px 6px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    border-radius: 32px;
    border: 1px solid #fff;
    background-color: #6548ee;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }
`;

const Share = styled.div`
  display: flex;
  height: 30px;
  padding: 2px 8px 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 50px;
  border: 1px solid #1c4980;
  color: #1c4980;
  font-size: 14px;
  font-weight: 500;
`;
