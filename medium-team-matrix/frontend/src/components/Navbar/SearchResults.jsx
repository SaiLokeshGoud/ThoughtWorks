import StoryContainer from "../dashboard/StoryContainer";

const SearchResults = ({ data }) => {
  console.log(data);
  return (
    <div className="searchResults">
      <div className="searchedStories">
        <span>ContentBased</span>
        {
          data.contentBased?.length > 0 ? data.contentBased.map((element, index) => (<StoryContainer element={element} key={index} />)
          ) : <div className="searchError"> No results found! </div>
        }</div>
      <div className="searchedStories">
        <span>AuthorBased</span>
        {
          data.authorBased?.length > 0 ? data.authorBased.map((element, index) => (<StoryContainer element={element} key={index} />)
          ) : <div className="searchError"> No results found! </div>
        }</div>
      <div className="searchedStories">
        <span>TagsBased</span>
        {
          data.tagBased?.length > 0 ? data.tagBased.map((element, index) => (<StoryContainer element={element} key={index} />)
          ) : <div className="searchError"> No results found! </div>
        }</div>
    </div>
  );
};

export default SearchResults;
