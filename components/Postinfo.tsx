import { FC } from "react";

import Heading from "./Heading";
import { postType } from "../types";

type postInfoPost = {
  post: postType,
}


const PostInfo:FC<postInfoPost> = ({ post }) => {
  const { title, body } = post || {};
  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <div className="">
        <strong>Post : </strong>
        {body}
      </div>
    </>
  );
};

export default PostInfo;
