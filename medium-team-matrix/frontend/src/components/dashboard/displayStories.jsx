import { useEffect, useState } from "react";
import useFetchData from "./fetchDashboard";
import StoryContainer from "./StoryContainer";


const GetStories = () => {
  const { data, error } = useFetchData();
  const [stories, setStories] = useState([]); 
  useEffect(() => {
    if (data) {
      const storiesArray = data && data[0]?.stories;
      storiesArray && setStories(storiesArray);
    }
  }, [data]);
  if (error) return <p>{error}</p>;
  return (
    <div className="storiesContainer">
      {stories.length > 0 ? (
        stories.map((element, index) => (
          <StoryContainer element={element} key={index} />
        ))
      ) : (
        <div>Follow to see stories</div>
      )}
    </div>
  );
};

export default GetStories;
