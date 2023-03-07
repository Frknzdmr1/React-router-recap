import { useParams } from "react-router-dom";

const Post = () => {
  const {postId} = useParams();
  return (
    <>
      <h1> Post {postId}</h1>
      <p> Post Details</p>
    </>
  );
};

export default Post;
