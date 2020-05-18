import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchText, getText] = useState("");

  const onSearchChange = e => {
    getText(e.target.value);
  };

  const handleSubmit = e => {
    //submit 이벤트 발생시 페이지 변환을 막는다.
    e.preventDefault();
    props.onSearch(searchText);
    //currentTarget이벤트가 바인딩된 요소 선택 여기서는 form
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        onChange={onSearchChange}
        type="search"
        name="search"
        placeholder="Charactor Name..."
      />
      <button type="submit">
        <i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
}
