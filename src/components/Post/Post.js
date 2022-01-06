import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit earum</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nisi
          quod magnam vel aut sed qui ipsam quia nesciunt dolore, non excepturi
          exercitationem quos architecto et? Voluptatem est obcaecati ut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nisi
          quod magnam vel aut sed qui ipsam quia nesciunt dolore, non excepturi
          exercitationem quos architecto et? Voluptatem est obcaecati ut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nisi
          quod magnam vel aut sed qui ipsam quia nesciunt dolore, non excepturi
          exercitationem quos architecto et? Voluptatem est obcaecati ut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nisi
          quod magnam vel aut sed qui ipsam quia nesciunt dolore, non excepturi
          exercitationem quos architecto et? Voluptatem est obcaecati ut.
        </p>
      </div>
    </>
  );
}
