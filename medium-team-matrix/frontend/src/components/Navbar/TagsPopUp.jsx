import { useState } from "react";

const TagsPopUp = ({ handlePublish, toggleTagsPopup, setTags }) => {
  const [tagValue, setTagValue] = useState();
  console.log(setTags);
  const addTag = () => {
    setTags(prev => [...prev,tagValue]);
  };

  const handleChange = (event) => {
    setTagValue(event.target.value);
  };
  return(
    <div className="backgroundBlur">
      <div className="tagsPopup">
        <div className="addTagsFeature">
          <input type="text" name="" id="" maxLength={30} onChange={handleChange}/>
          <button onClick={addTag} className="addTags">Add</button>
        </div>
        <div className="popupOptions">
          <button onClick={handlePublish} className="publishTags">Publish</button>
          <button onClick={toggleTagsPopup} className="closeTags">Close</button>
        </div>
      </div>
    </div>
  );
};

export default TagsPopUp;
