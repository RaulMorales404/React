import { useState } from "react";
import "./Style.css";
import CustomButtons from "./CustomButtons";
export const SearchBox = ({ onInputTop, onClearResult, onHandleSearch, isSearchTop }) => {
  const [searchText, setSearchText] = useState("");
  const searchPeople = () => {
    if (searchText !== "" && !/^\s+$/.test(searchText)) {
      onInputTop(true);
      onHandleSearch(searchText.toLowerCase());
    }else{
      alert("Pype a name");
    }
  };
  const searchClose = () => {
    setSearchText("");
    onClearResult([]);
    onInputTop(false);
  };
  return (
    <div className="container">
      {!isSearchTop && <h2 className="title"> Search People </h2>}
      <div className={isSearchTop ? "row" : "row-none"}>
        <input
          className="input"
          value={searchText}
          onChange={({ target: { value } }) => setSearchText(value)}
        />
        <CustomButtons className="button" action={searchPeople} text="Search" />
        {isSearchTop &&  <CustomButtons
          className="button-close"
          action={searchClose}
          text="Cloce"
        />}
      </div>
    </div>
  );
};
export default SearchBox;
