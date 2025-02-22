import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ModalContext } from "../../Context/ModalContext";

const MobileSidebar = () => {
  const { modal, setModal } = useContext(ModalContext);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <MainConatiner>
          <div className="main">
            <Menu>
              <span>Menu</span>
              <img
                src="/cut.png"
                alt="dashboard"
                className="cuticon"
                onClick={closeModal}
              />
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
              <img src="/note_alt.png" alt="dashboard" className="icon" />
              <span>Assessment</span>
            </Active>

            <Blocks1>
              <img src="/quiz.png" alt="dashboard" className="icon" />
              <span>My Library</span>
            </Blocks1>

            <Block2>
              <Blocks12>
                <div className="part1">
                  <img src="/admin_meds.png" alt="dashboard" className="icon" />
                  <span>Round Status</span>
                </div>
                <Admin>Admin</Admin>
              </Blocks12>
            </Block2>
          </div>
        </MainConatiner>
      )}
    </>
  );
};

export default MobileSidebar;

const MainConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 990px;
  padding: 16px 20px 20px 30px;
  color: #1c4984;
  background-color: white;

  @media (max-width: 768px) {
    position: absolute;
    width: 230px;
    height: 1500px;
    padding: 40px 20px 10px 20px;
    align-items: flex-start;
    gap: 10px;
    background: #f2f8fe;
  }

  .icon {
    font-size: 22px;
  }
`;

const Blocks1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 14px;
  padding: 12px 0px;

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
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #0073e6;
  background: #e5f1fc;
  font-size: 14px;
  color: #0073e6;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  .Activeicon {
    font-size: 22px;
    color: #0073e6;
  }
`;

const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin: 10px;
  /* gap: 50px; */
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px dashed lightgray;
  .part1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

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
  /* margin: 10px; */
  gap: 10px;
  font-size: 12px;
  padding: 10px 0px;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Admin = styled.div`
  color: #d63500;
  font-weight: 500;
  line-height: normal;
  border-radius: 22px;
  padding: 0 8px;
  border: 1px solid var(--Accent-New-red, #d63500);
  background: var(--Accent-red-light, #fbebea);
`;

const Menu = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 10px 20px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  gap: 20px;
  .cuticon {
    cursor: pointer;
  }
`;
