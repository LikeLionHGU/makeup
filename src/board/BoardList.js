import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BoardList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    try {
      const response = await fetch("/dummy.json"); // dummy.json 파일로부터 데이터 가져오기
      const data = await response.json();
      setBoardList(data.board); // boardList에 더미 데이터 설정
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const moveToWrite = () => {
    navigate("/write");
  };

  useEffect(() => {
    getBoardList(); // 컴포넌트가 마운트될 때 더미 데이터 불러오기
  }, []);

  return (
    <div>
      <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;
