import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ModalContext } from "../../Context/ModalContext";
import MobileSidebar from "./MobileviewSidebar";

const Sidebar = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {isDesktopSidebarOpen && (
        <MainContainer>
          <div className="main">
            <Menu>
              <span>Menu</span>
              <div className="Cutbox">
                <img
                  src="/cut.png"
                  alt="dashboard"
                  className="cuticon"
                  onClick={closeModal}
                />
              </div>
            </Menu>

            <Blocks1>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_867)">
                  <path
                    d="M15.8333 4.66667V6.33333H12.5V4.66667H15.8333ZM7.5 4.66667V9.66667H4.16667V4.66667H7.5ZM15.8333 11.3333V16.3333H12.5V11.3333H15.8333ZM7.5 14.6667V16.3333H4.16667V14.6667H7.5ZM17.5 3H10.8333V8H17.5V3ZM9.16667 3H2.5V11.3333H9.16667V3ZM17.5 9.66667H10.8333V18H17.5V9.66667ZM9.16667 13H2.5V18H9.16667V13Z"
                    fill="#1C4980"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_867">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Dashboard</span>
            </Blocks1>

            <Active>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_0_871"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_0_871)">
                  <path
                    d="M6.00497 14.495H7.50497L12.4108 9.58925L10.9108 8.08925L6.00497 12.995V14.495ZM13.1191 8.88092L13.8691 8.13092C13.9802 8.01981 14.0358 7.90175 14.0358 7.77675C14.0358 7.65175 13.9802 7.5337 13.8691 7.42259L13.0774 6.63092C12.9663 6.51981 12.8483 6.46425 12.7233 6.46425C12.5983 6.46425 12.4802 6.51981 12.3691 6.63092L11.6191 7.38092L13.1191 8.88092ZM4.55978 17.6694C4.08426 17.6694 3.67718 17.5001 3.33856 17.1615C2.99992 16.8228 2.8306 16.4158 2.8306 15.9402V5.05981C2.8306 4.58429 2.99992 4.17721 3.33856 3.83858C3.67718 3.49995 4.08426 3.33063 4.55978 3.33063H7.95787C8.09223 2.89343 8.3448 2.53413 8.71558 2.25273C9.08634 1.97133 9.51448 1.83063 9.99999 1.83063C10.4855 1.83063 10.9136 1.97133 11.2844 2.25273C11.6552 2.53413 11.9078 2.89343 12.0421 3.33063H15.4402C15.9157 3.33063 16.3228 3.49995 16.6614 3.83858C17.0001 4.17721 17.1694 4.58429 17.1694 5.05981V15.9402C17.1694 16.4158 17.0001 16.8228 16.6614 17.1615C16.3228 17.5001 15.9157 17.6694 15.4402 17.6694H4.55978ZM4.55978 15.9402H15.4402V5.05981H4.55978V15.9402ZM9.99999 4.53988C10.156 4.53988 10.2849 4.48889 10.3869 4.38692C10.4889 4.28495 10.5398 4.15598 10.5398 4.00002C10.5398 3.84406 10.4889 3.7151 10.3869 3.61313C10.2849 3.51116 10.156 3.46017 9.99999 3.46017C9.84403 3.46017 9.71507 3.51116 9.6131 3.61313C9.51113 3.7151 9.46014 3.84406 9.46014 4.00002C9.46014 4.15598 9.51113 4.28495 9.6131 4.38692C9.71507 4.48889 9.84403 4.53988 9.99999 4.53988Z"
                    fill="#0073E6"
                  />
                </g>
              </svg>

              <span>Assessment</span>
            </Active>

            <Blocks1>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_0_877"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_0_877)">
                  <path
                    d="M11.6296 12.8007C11.8657 12.8007 12.0636 12.7209 12.2233 12.5611C12.383 12.4014 12.4629 12.2035 12.4629 11.9674C12.4629 11.7313 12.383 11.5334 12.2233 11.3736C12.0636 11.2139 11.8657 11.134 11.6296 11.134C11.3934 11.134 11.1955 11.2139 11.0358 11.3736C10.8761 11.5334 10.7962 11.7313 10.7962 11.9674C10.7962 12.2035 10.8761 12.4014 11.0358 12.5611C11.1955 12.7209 11.3934 12.8007 11.6296 12.8007ZM11.0254 10.3437H12.2337C12.2337 9.98082 12.2675 9.70923 12.3349 9.52896C12.4024 9.34871 12.5512 9.1505 12.7813 8.93432C13.0696 8.65986 13.3292 8.38208 13.56 8.10098C13.7909 7.81989 13.9063 7.46738 13.9063 7.04346C13.9063 6.41182 13.696 5.90669 13.2755 5.52807C12.855 5.14944 12.3012 4.96013 11.6141 4.96013C11.0833 4.96013 10.6096 5.1086 10.193 5.40554C9.77628 5.7025 9.48628 6.11047 9.32293 6.62944L10.4063 7.08015C10.5002 6.76734 10.6548 6.52677 10.87 6.35844C11.0853 6.19012 11.3333 6.10596 11.6141 6.10596C11.9388 6.10596 12.2005 6.19541 12.3995 6.37429C12.5985 6.5532 12.6979 6.78516 12.6979 7.07019C12.6979 7.36345 12.5903 7.61844 12.375 7.83515C12.1597 8.05186 11.934 8.27241 11.6979 8.49682C11.4123 8.7613 11.2288 9.01145 11.1474 9.24727C11.0661 9.48308 11.0254 9.84857 11.0254 10.3437ZM6.67439 15.5548C6.19546 15.5548 5.78753 15.3863 5.4506 15.0494C5.11368 14.7125 4.94522 14.3045 4.94522 13.8256V3.94519C4.94522 3.46626 5.11368 3.05833 5.4506 2.7214C5.78753 2.38447 6.19546 2.216 6.67439 2.216H16.5548C17.0337 2.216 17.4417 2.38447 17.7786 2.7214C18.1155 3.05833 18.284 3.46626 18.284 3.94519V13.8256C18.284 14.3045 18.1155 14.7125 17.7786 15.0494C17.4417 15.3863 17.0337 15.5548 16.5548 15.5548H6.67439ZM6.67439 13.8256H16.5548V3.94519H6.67439V13.8256ZM3.44522 18.7839C2.96629 18.7839 2.55836 18.6155 2.22143 18.2786C1.8845 17.9416 1.71603 17.5337 1.71603 17.0548V5.44519H3.44522V17.0548H15.0548V18.7839H3.44522Z"
                    fill="#1C4980"
                  />
                </g>
              </svg>
              <span>My Library</span>
            </Blocks1>

            <Block2>
              <Admin>Admin</Admin>
              <Blocks12>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_0_905"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_905)">
                    <path
                      d="M10.2781 13.6835C9.7316 14.2278 9.06944 14.4965 8.29167 14.4896C7.51389 14.4826 6.85417 14.2071 6.3125 13.6631C5.77083 13.1191 5.5 12.4628 5.5 11.6944C5.5 10.9259 5.77326 10.2695 6.31979 9.72521L9.72188 6.31646C10.2684 5.77215 10.9306 5.50347 11.7083 5.51042C12.4861 5.51736 13.1458 5.79285 13.6875 6.3369C14.2292 6.88094 14.5 7.53719 14.5 8.30565C14.5 9.0741 14.2267 9.73049 13.6802 10.2748L10.2781 13.6835ZM7.375 12.6042C7.73611 12.9653 8.10147 13.0945 8.47108 12.992C8.84069 12.8894 9.09339 12.767 9.22917 12.625L10.3958 11.4583L8.54167 9.625L7.375 10.7917C7.125 11.0417 7 11.3438 7 11.6979C7 12.0521 7.125 12.3542 7.375 12.6042ZM12.625 7.39583C12.2639 7.03472 11.9015 6.90546 11.5377 7.00804C11.174 7.11064 10.9253 7.23296 10.7917 7.375L9.60417 8.54167L11.4583 10.3958L12.625 9.22917C12.875 8.97917 13 8.67361 13 8.3125C13 7.95139 12.875 7.64583 12.625 7.39583ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H8.0625C8.17361 2.56944 8.40625 2.21181 8.76042 1.92708C9.11458 1.64236 9.52778 1.5 10 1.5C10.4722 1.5 10.8854 1.64236 11.2396 1.92708C11.5938 2.21181 11.8264 2.56944 11.9375 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5ZM10 4C10.1444 4 10.2639 3.95278 10.3583 3.85833C10.4528 3.76389 10.5 3.64444 10.5 3.5C10.5 3.35556 10.4528 3.23611 10.3583 3.14167C10.2639 3.04722 10.1444 3 10 3C9.85556 3 9.73611 3.04722 9.64167 3.14167C9.54722 3.23611 9.5 3.35556 9.5 3.5C9.5 3.64444 9.54722 3.76389 9.64167 3.85833C9.73611 3.95278 9.85556 4 10 4Z"
                      fill="#1C4980"
                    />
                  </g>
                </svg>
                <span>Round Status</span>
              </Blocks12>
            </Block2>
          </div>
        </MainContainer>
      )}

      {
        <Mobileview>
          <MobileSidebar closeModal={closeModal} />
        </Mobileview>
      }
    </>
  );
};

export default Sidebar;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 990px;
  padding: 16px 20px 20px 30px;
  color: #1c4984;
  background-color: white;
  position: sticky;
  top: 5px;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    width: 230px;
    height: 100vh;
    padding: 40px 20px 10px 20px;
    align-items: flex-start;
    gap: 10px;
    background: #f2f8fe;
  }

  .icon {
    font-size: 20px;
  }
`;

const Blocks1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 12px;
  padding: 10px 0px;

  @media (max-width: 768px) {
    height: 50px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    flex-direction: row;
  }
`;

const Active = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 8px;
  border: 1px solid #0073e6;
  background: #e5f1fc;
  font-size: 12px;
  color: #0073e6;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  .Activeicon {
    font-size: 20px;
    color: #0073e6;
  }
`;

const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin: 10px;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px dashed lightgray;
  @media (max-width: 768px) {
    height: 50px;
    flex-direction: row-reverse;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`;

const Blocks12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 12px;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Admin = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: Red;
  background-color: #ffefea;
  padding: 2px 8px;
  border: 2px solid red;
  border-radius: 20px;
`;

const Menu = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 10px 20px;
  display: none;
  .Cutbox {
  }

  @media (max-width: 768px) {
    display: flex;
  }

  gap: 20px;
  .cuticon {
    cursor: pointer;
  }
`;

const Mobileview = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;
