import { useState } from "react";
import dummy from "./dummydata.json";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const [member] = useState(dummy.data);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // const filterResult = member.filter((p) => {
  //   return (
  //     p.title
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
  //     p.body
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
  //     p.tag
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase().replace(" ", "")) ||
  //     p.nickname
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase().replace(" ", ""))
  //   );
  // });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log({ search });
      navigate("/searchboard", { search });
    }
  };

  return (
    <div>
      <div className="content">
        <input
          type="text"
          value={search}
          onChange={onChange}
          onKeyDown={handleKeyPress}
        ></input>
      </div>
    </div>
  );
}
