import React from "react";
import Layout from "../shared/Layout";
import { useState } from "react";
// import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./mine.css";

const Submit = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState({
    id: 0,
    title: "",
    singer: "",
    desc: "",
  });

  const onSubmitHandler = async (music) => {
    await axios.post(`${process.env.REACT_APP_MUSIC}/lists`, music);
    navigate("/List");
  };

  return (
    <Layout>
      <form
        className="addBox"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(music);
        }}
      >
        <StOneInput>
          <label className="form-label" />
          <input
            required
            type="type"
            name="title"
            value={music.title}
            placeholder="🎶노래제목🎶"
            className="add-input"
            onChange={(ev) => {
              const { value } = ev.target;
              setMusic({
                ...music,
                title: value,
              });
            }}
          />
        </StOneInput>
        <StOneInput>
          <label className="form-label" />
          <input
            required
            type="text"
            name="desc"
            placeholder="🎶노래후기🎶"
            value={music.desc}
            className="add-input"
            onChange={(ev) => {
              const { value } = ev.target;
              setMusic({
                ...music,
                desc: value,
              });
            }}
          />
        </StOneInput>
        <StOneInput>
          <label className="form-label" />
          <input
            required
            type="text"
            name="singer"
            value={music.singer}
            placeholder="🎶가수🎶"
            className="add-input"
            onChange={(ev) => {
              const { value } = ev.target;
              setMusic({
                ...music,
                singer: value,
              });
            }}
          />
        </StOneInput>
        <button className="add-button">기록하기</button>
      </form>
    </Layout>
  );
};

export default Submit;

const StOneInput = styled.div`
  margin: 30px;
`;
