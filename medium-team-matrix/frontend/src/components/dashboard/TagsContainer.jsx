const TagsContainer = ({ story }) => {
  return (
    <div className="tags-container">
      {story?.tags?.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default TagsContainer;
