// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const Comment = ({ comment }) => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [isEdit, setIsEdit] = useState(false);
//   const [updatedComment, setUpdatedComment] = useState("");

//   const { content } = useSelector((state) => state.comment.data);
//   const onDeleteButtonHandler = () => {
//     const result = window.confirm("삭제하시겠습니까?");
//     if (result) {
//       dispatch(__deleteComment(comment.id));
//     } else {
//       return;
//     }
//   };
