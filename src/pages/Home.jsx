import React from "react";
import Layout from "../shared/Layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="Home_Navigate_Group">
        <StRouteBox>
          <div>🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎶🎵🎶</div>
          <div></div>
          <StButton
            borderColor="#df0c0c"
            onClick={() => {
              navigate("/Submit");
            }}
          >
            My Music
          </StButton>
          <div>🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎵🎶🎶🎵🎶</div>
        </StRouteBox>
        <StRouteBox>
          <div>🧡💛💚💙💜🧡💛💚💙💜🧡💛💚💙💜🧡💛💚💙💜</div>
          <div> </div>
          <StButton
            borderColor="#df0c0c"
            onClick={() => {
              navigate("/List");
            }}
          >
            Play List
          </StButton>
          <div>🧡💛💚💙💜🧡💛💚💙💜🧡💛💚💙💜🧡💛💚💙💜</div>
        </StRouteBox>
      </div>
    </Layout>
  );
};

export default List;

const StRouteBox = styled.div`
  margin: 30px 0 30px 0;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  font-size: 32px;
  color: white;
  height: 100px;
  width: 440px;
  background-color: #2f8de6;
  border-radius: 12px;
  cursor: pointer;
`;
