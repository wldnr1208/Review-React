import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState();
  const hadleSubmit = (e) => {
    //검색을 하거나 클릭을 한다면 navigate로 text에 관련된 곳으로 이동.
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  //keyword가 변경될때마다 text를 업데이트 해야하기 때문에 useEffect 사용
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    //flex로 일렬로 나오게, border-b -> 보더를 줄건데 버튼에 줌
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      {/* youtube 누르면 youtube로  들어가지게 */}
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={hadleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
