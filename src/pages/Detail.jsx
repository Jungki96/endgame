import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  deleteComment,
  // editComment,
  // getMusicThunk,
} from "../redux/modules/detail";
import { useDispatch } from "react-redux";
// import { clearMusic, getMusic, updateMusic } from "../redux/modules/musicSlice";
import "./mine.css";

const Detail = () => {
  // 상세정보 창
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MUSIC}/lists`)
      .then((response) => {
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
      .get(`${process.env.REACT_APP_MUSIC}/comments?listid=${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onDeleteComment = (arg) => {
    dispatch(deleteComment(arg));
    return window.location.reload();
  };

  // 리스트 에딧!에딧!에딨!!!
  const onEditMusic = (e) => {
    console.log("id:", e);
    const thisid = Number(e.id);
    // console.log("id:", typeof e.id);
    const data = e.desc;
    // console.log("thisid:", thisid);
    console.log("data:", data);
    axios.patch(`${process.env.REACT_APP_MUSIC}/lists/${thisid}`, e);
    return window.location.reload();
  };
  const [editMusic, setEditMusic] = useState({
    desc: "",
  });

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
            🎶 {musicList.title} <br />
            🎤 {musicList.singer}
            <br />
            📖 {musicList.desc}
          </StTitle>
          <div className="editBox">
            <input
              type="text"
              placeholder="입력안하면 수정안해"
              onChange={(ev) => {
                setEditMusic({
                  ...editMusic,
                  desc: ev.target.value,
                  id: id,
                });
              }}
            />
            <button
              // type='button' 을 추가해야 form의 영향에서 벗어남
              type="button"
              className="justEditButton"
              onClick={() => onEditMusic(editMusic)}
            >
              수정하기
            </button>
          </div>
        </div>
      </StDialog>
      <StDialog>
        <div className="commentBox">
          <StCommentHeader>댓글 목록</StCommentHeader>
          <StComment>
            {comments.map((comment) => {
              console.log("코멘트 id : ", comment.id);
              return (
                <div className="todocontainer" key={comment.id}>
                  <div className="todoInfo">
                    <h3 className="textBbox">
                      {comment.username} - {comment.comment}
                    </h3>
                    <button
                      className="justEditButton"
                      onClick={() => onDeleteComment(comment.id)}
                    >
                      ☝️delete
                    </button>
                  </div>
                </div>
              );
            })}
          </StComment>
          <div className="WithAddComment">
            <input
              type="text"
              placeholder="작동안됩니다"
              onChange={(ev) => {
                setEditMusic({
                  ...editMusic,
                  desc: ev.target.value,
                  id: id,
                });
              }}
            />
            <button
              // type='button' 을 추가해야 form의 영향에서 벗어남
              type="button"
              className="justCommentButton"
              onClick={() => onEditMusic(editMusic)}
            >
              댓글남기기
            </button>
          </div>
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
  color: beige;
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #3dd4bb;
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

// const StBody = styled.main`
//   padding: 0 24px;
// `;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

// const StEditbutton = styled.button`
//   border: 1px solid ${({ borderColor }) => borderColor};
//   height: 40px;
//   width: 120px;
//   background-color: #fff;
//   border-radius: 12px;
//   cursor: pointer;
// `;

const StComment = styled.div``;

const StCommentHeader = styled.h1``;
