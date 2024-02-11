import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    createdBy: "",
    contents: "",
    image: null, // 이미지 파일을 담을 상태 추가
  });

  const { title, contents } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  // 이미지 파일 선택 시 실행되는 함수
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setBoard({
      ...board,
      image: file,
    });
  };

  const saveBoard = () => {
    alert("등록되었습니다.");
    navigate("/board");
  };

  const backToList = () => {
    navigate("/board");
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <span>사진 업로드</span>
        <input type="file" onChange={onFileChange} />
      </div>
      <br />
      <div>
        <button onClick={saveBoard}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default BoardWrite;
