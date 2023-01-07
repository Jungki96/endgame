import React from "react";
import Layout from "../shared/Layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="Home_Navigate_Group">
        <div className="Home_Submit_Box">
          <div>🥕🥕🥕🥕🥕</div>
          <div>여기 홈위치</div>
          <StButton
            borderColor="#df0c0c"
            onClick={() => {
              navigate("/Submit");
            }}
          >
            Submit Page
          </StButton>
          <div>🧡💛💚💙💜</div>
        </div>
        <div className="Home_List_box">
          <div>🥕🥕🥕🥕🥕</div>
          <div> 여기 리스트창</div>
          <StButton
            borderColor="#df0c0c"
            onClick={() => {
              navigate("/List");
            }}
          >
            List Page
          </StButton>
          <div>🧡💛💚💙💜</div>
        </div>
      </div>
    </Layout>
  );
};

export default List;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #2f8de6;
  border-radius: 12px;
  cursor: pointer;
`;
