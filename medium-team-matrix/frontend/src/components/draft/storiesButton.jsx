import { Link } from "react-router-dom";
import { useState } from "react";

const StoriesButton = function () {
  const [active, setActive] = useState(true);
  const [activePublish, setActivePublish] = useState(false);

  const handleDraftButton = () => {
    setActive(!active);
    setActivePublish(!activePublish);
  };

  const handlePublishButton = () => {
    setActivePublish(!activePublish);
    setActive(!active);
  };

  return (
    <>
      <h1 className="userStoriesHeading">Your Stories</h1>
      <div className="stories-buttons">
        <Link to="/stories/drafts">
          <button
            className={active ? "black-btn" : "drafts-story-button"}
            onClick={handleDraftButton}
          >
            Drafts
          </button>
        </Link>
        <Link to="/stories/published-stories">
          <button
            className={activePublish ? "black-btn" : "published-story-button"}
            onClick={handlePublishButton}
          >
            Published
          </button>
        </Link>
      </div>
    </>
  );
};

export default StoriesButton;
