import { useState } from "react";

export default function BoardList() {
  const [userInput, setUserInput] = useState("");

  // 입력값을 가져와서 소문자로변경
  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };
  // 데이터들을 배열로 monsters 에 배열 state로 담아준 상태
  const [members, setMembers] = useState([]);

  // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
  const searched = members.filter((item) =>
    item.name.toLowerCase().includes(userInput)
  );

  <input onChange={getValue} />;
  return (
    <>
      <h1>컴포넌트 재사용 연습!</h1>
      <input onChange={getValue} />
      {searched.map((item) => (
        <Card key={item.id} {...item} /> // 잔여연산자 사용
      ))}
    </>
  );
}

function Card({ id, name, email }) {
  // 넘겨받은 객체 데이터중, id/name/email의 값만 받을것이다.
  return (
    <div className="cardContainer">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
