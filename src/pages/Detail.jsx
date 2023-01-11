import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { deleteComment } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
// import { clearMusic, getMusic, updateMusic } from "../redux/modules/musicSlice";

const Detail = () => {
  // 상세정보 창
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lists")
      .then((response) => {
        // console.log("param 확인 :", typeof id);
        response.data.filter((list) => {
          if (list.id === Number(id)) {
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

  // useEffect(() => {
  //   dispatch(__getCommentsThunk);
  // });
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/comments?listid=${id}`)
      .then((res) => {
        console.log(res);
        setComments(res.data);
        // console.log(res.data);
        // res.data.map((need) => {
        //   console.log("니드.리스트아이디:", need.listid);
        //   if (need.listid === Number(id)) {
        //     console.log(comments);
        //     console.log(need);
        //     setComments([...comments, need]);
        //   }
        //   return null;
        // });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("코멘트  :", comments);

  const onDeleteComment = (arg) => {
    console.log(arg);
    dispatch(deleteComment(arg));
  };

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
          <StTitle>
            노래 : {musicList.title} <br />
            가수 : {musicList.singer}
          </StTitle>
          <StBody>{musicList.desc}</StBody>
        </div>
      </StDialog>
      <StDialog>
        <div>
          <StInputComment></StInputComment>
          <button>등록하기</button>
          <StCommentHeader>댓글 목록</StCommentHeader>
          <StComment>
            {comments.map((comment) => {
              return (
                <div className="todocontainer" key={comment.id}>
                  <div className="todoInfo">
                    <h3 className="textBbox">
                      {comment.username} - {comment.comment}
                    </h3>
                    <button
                      className="btnDelete"
                      onClick={() => onDeleteComment(comment.id)}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              );
            })}
          </StComment>
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
  flex-direction: column;
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
  margin: 10px;
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

const StInputComment = styled.input``;

const StComment = styled.div``;

const StCommentHeader = styled.h1``;
