import React, { useEffect, useState } from "react";
import Layout from "../shared/Layout";
import axios from "axios";

const List = () => {
  const [musics, setMusics] = useState(null);

  const fetchMusics = async () => {
    const { data } = await axios.get("http://localhost:3001/lists");
    setMusics(data);
  };

  useEffect(() => {
    fetchMusics();
  }, []);
  console.log(musics);
  return (
    <Layout>
      <div>
        <div>아이디:{musics.id}</div>
        <div>제목:{musics.title}</div>
        <div>설명:{musics.desc}</div>
        <div>가수:{musics.singer}</div>
      </div>
    </Layout>
  );
};

export default List;
