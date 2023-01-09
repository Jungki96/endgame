import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Layout from "../shared/Layout";
import axios from "axios";
// import styled from "styled-components";

// const

const List = () => {
  const [musics, setMusics] = useState(null);
  // console.log("1번쨰 패치전 :", musics);
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.

  // const fetchMusics = async () => {
  //   const { data } = await axios.get("http://localhost:3001/lists");
  //   setMusics(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  // };
  // // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  // useEffect(() => {
  //   // effect 구문에 생성한 함수를 넣어 실행합니다.
  //   fetchMusics();
  // }, []);
  // console.log(musics);
  useEffect(() => {
    axios.get("http://localhost:3001/lists").then((response) => {
      console.log(response.data);
      setMusics(response.data);
    });
  }, []);
  // console.log(musics[0]);
  return (
    <Layout>
      <div>
        <div>
          {musics?.map((music) => {
            return (
              <div key={music.id}>
                <div>{music.title}</div>
                <div>{music.desc}</div>
                <div>{music.singer}</div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default List;
