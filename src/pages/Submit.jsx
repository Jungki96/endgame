import React from "react";
import Layout from "../shared/Layout";
import { useState } from "react";
// import { nanoid } from "nanoid";
import axios from "axios";

const Submit = () => {
  //
  const [music, setMusic] = useState({
    id: "",
    title: "",
    desc: "",
    singer: "",
  });

  const onSubmitHandler = async (music) => {
    await axios.post("http://localhost:3001/lists", music);
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
        <div className="addGroup">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={music.title}
            className="add-input"
            onChange={(ev) => {
              const { value } = ev.target;
              setMusic({
                ...music,
                title: value,
              });
            }}
          />
        </div>
        <div>
          <label className="form-label">Description</label>
          <input
            type="text"
            name="desc"
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
        </div>
        <div>
          <label className="form-label">Singer</label>
          <input
            type="text"
            name="singer"
            value={music.singer}
            className="add-input"
            onChange={(ev) => {
              const { value } = ev.target;
              setMusic({
                ...music,
                singer: value,
              });
            }}
          />
        </div>
        <button className="add-button">Add</button>
      </form>
    </Layout>
  );
};

export default Submit;