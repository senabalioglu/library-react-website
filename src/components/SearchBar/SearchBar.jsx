import "./SearchBar.css"

function SearchBar({searchValue, onValueChange}) {
  return (
    <>
      <div className="search-bar-container">
        <input
        value={searchValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="search-bar-input"
        placeholder="Search..."
        />
      </div>
    </>
  );
}

export default SearchBar