import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { clearMusic, getMusic, updateMusic } from "../redux/modules/musicSlice";

const Detail = () => {
  // 상세정보 창
  const param = useParams();
  const navigate = useNavigate();
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lists")
      .then((response) => {
        response.data.filter((list) => {
          if (list.id === Number(param.id)) {
            setMusicList(list);
          }
          return null;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //댓글 기능
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getCommentsThunk);
  // });

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>{musicList.title}의 상세페이지</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/List");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{musicList.title}</StTitle>
          <StBody>{musicList.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: beige;
  border-radius: 10px 10px;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
