import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from '../redux/slices/searchSlice'

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const query = useSelector((state)=>state.search.query)

  function queryHandler(e) {
    setText(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    
    dispatch(setQuery(text))

    setText('')
  }

  return (
    <div>
      <form
        className="flex px-10 py-7 gap-5 w-full"
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          className="px-4 py-2 border-2 text-xl rounded outline-none w-[90%] focus:border-[#7e90cb]"
          type="text"
          placeholder="Search Anything..."
          required
          value={text}
          onChange={(e) => {
            queryHandler(e);
          }}
        />
        <button className="px-4 py-2 border-2 text-xl rounded outline-none cursor-pointer active:scale-95 active:border-[#7e90cb]">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
