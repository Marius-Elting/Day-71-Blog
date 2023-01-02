import { useEffect, useState } from "react";
import AddPost from "./addPost";
import PostParent from "./postParent";

function UserPage({ posts, deletePost }) {

    return (
        <div>
            {/* <AddPost setPosts={setPosts} /> */}
            <PostParent page={"user"} deletePost={deletePost} posts={posts} />
        </div>
    );
}

export default UserPage;