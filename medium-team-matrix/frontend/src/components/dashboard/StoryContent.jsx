import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import fetchApi from "../script/fetchApi";
import Header from "../Navbar/Navbar";
import "./storyContent.css";
import parse from "html-react-parser";
import moment from "moment";
import ResponsesList from "./ResponsesList";
import StoryReactions from "./StoryReactions";
import ResponseEditor from "./ResponseEditor";
import AuthorInfo from "./AuthorInfo";
import TagsContainer from "./TagsContainer";

const Storycontent = function () {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [responseCount, setResponseCount] = useState("");
  const [storyComments, setStoryComments] = useState([]);
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const state = location.state;
  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const updateResponseCount = (newComment) => {
    setResponseCount((prevCount) => prevCount + 1);
    setStoryComments((prevComments) => [...prevComments,newComment ]);
  };

  useEffect(() => {
    const assignUpdatedStory = async function () {
      if (state === null) {
        const res = await fetchApi(`http://localhost:8000/story/${id}`);
        setStory(res?.story);
      } else if (state) {
        if (state.isPublished === true) {
          console.log(id);
          const res = await fetchApi(`http://localhost:8000/story/${id}`);
          setStory(res?.story);
        } else if (state.story) {
          const updatedStory = location.state.story.story;
          setStory(updatedStory);
        }
      }
    };
    const fetchPostResponseCount = async function () {
      const responses = await fetchApi(
        `http://localhost:8000/story/${id}/responses`
      );
      setResponseCount(responses.story.responsesCount);
      setStoryComments(responses.responses);
    };

    assignUpdatedStory();
    fetchPostResponseCount();
  }, [storyComments.length]);

  if (!story) {
    return <p>No content available.</p>;
  }

  return (
    <>
    <div className="responseModalBackground">
      <Header />
      <div className="story">
        <h1>{story.title && parse(story.title)}</h1>
        <AuthorInfo story={story} />
        <TagsContainer story={story}/>
        <StoryReactions
          story={story}
          responseCount={responseCount}
          handleClick={toggleModal}
        />
        {modal && (
          
          <div className="responses-modal">
            <div className="close-responses">
              Responses ({responseCount})
              <button onClick={toggleModal}>&times;</button>
            </div>
            <ResponseEditor onNewResponse={updateResponseCount} />
            <ResponsesList comments={storyComments} />
          </div>
        )}
        {story.content?.map((element, index) => {
          const HeaderTag = `h${element.data.level}`;
          switch (element.type) {
            case "paragraph":
              return <p key={index}>{parse(element.data.text)}</p>;
            case "header":
              return (
                <HeaderTag key={index}>{parse(element.data.text)}</HeaderTag>
              );
            case "delimiter":
              return <hr key={index} />;
            default:
              return null;
          }
        })}
        <div className="published-on">
          {moment(story.published_at).fromNow()}
        </div>
      </div>
      </div>
    </>
  );
};

export default Storycontent;
