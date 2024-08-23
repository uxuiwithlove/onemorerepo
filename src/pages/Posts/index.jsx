import Post from "../../components/Post";
import { posts } from "./utils";

const Posts = () => {
  return (
    <div>
      <h2 className="posts">All posts:</h2>
      <div className="container">
        {posts.map((post) => {
          return (
            <Post
              title={post.title}
              content={post.content}
              date={post.date}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
