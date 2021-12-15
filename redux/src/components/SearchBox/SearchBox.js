import { useState } from "react";
import "./Style.css";
export const SearchBox = ({action,stateSearch}) => {
  const [searchText, setSearchText] = useState("");
  const searchPeople = () => {
    action(true);
  };
  const searchClose = () => {
    setSearchText("");
    action(false);
  };
  return (
    <div className="container">
      {stateSearch?  null:<h2 className="title">Search People</h2>}
    
      <div className={stateSearch? "row":"row-none"}>
        <input
          className="input"
          value={searchText}
          onChange={({ target: { value } }) => {
            setSearchText(value);
          }}
        />
        <button className="button" onClick={searchPeople}>
          Search
        </button>
        <button className="button-close" onClick={searchClose}>
          Cloce
        </button>
      </div>
    </div>
  );
};
export default SearchBox;
