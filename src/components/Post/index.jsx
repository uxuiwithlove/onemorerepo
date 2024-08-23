import "./Post.css";

const Post = (props) => {
  return (
    <div class="posts-container">
      <div class="post">
        <div class="post-title">{props.title}</div>
        <div class="post-date">{props.date}</div>
        <div class="post-content">{props.content}</div>
        <div class="post-metrics">
          <span>{props.likes}</span>
          <span>{props.comments}</span>
          <span>{props.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
