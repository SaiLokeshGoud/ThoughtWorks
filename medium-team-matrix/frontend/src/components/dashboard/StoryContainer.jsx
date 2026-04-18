import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";
import AuthorInfo from "./AuthorInfo";
import StoryReactions from "./StoryReactions";
import fetchApi from "../script/fetchApi";
import { useEffect, useState } from "react";
import TagsContainer from "./TagsContainer";
const StoryContainer = ({ element, username, userProfile }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState("");
  const { title, id: storyId, content, published_at } = element || {};
  const [responsesCount, setResponsesCount] = useState(0);

  useEffect(() => {
    const test = async () => {
      if (storyId) {
        const res = await fetchApi(
          `http://localhost:8000/story/${storyId}/responses`
        );
        setResponsesCount(res.story.responsesCount);
        setStory(res.story);
      }
    };
    test();
  }, [storyId]);

  const truncateText = (text, length = 100) => {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const handleTitleClick = async () => {
    const Response = await fetchApi(`http://localhost:8000/story/${storyId}`);
    console.log(Response.story.responsesCount);
    setStory(Response);
    navigate(`/story/${storyId}`, { state: { story: Response } });
  };

  return (
    <div className='story'>
      <AuthorInfo
        AuthorId={id}
        story={element}
        username={username}
        userProfile={userProfile}
      />
      <h1 onClick={handleTitleClick}>{title}</h1>

      <div className="introText">
        {content[0] ? parse(truncateText(content[0].data.text)) : null}
      </div>
      <TagsContainer story={story} />
      <StoryReactions story={story} responseCount={responsesCount} />
      <div className="published-on">{moment(published_at).fromNow()}</div>
    </div>
  );
};

export default StoryContainer;
