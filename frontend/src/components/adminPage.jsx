import { useEffect, useState } from "react";
import AddPost from "./addPost";
import PostParent from "./postParent";

function AdminPage({ deletePost, posts, setPosts }) {

    return (
        <div>
            <AddPost setPosts={setPosts} />
            <PostParent page={"admin"} deletePost={deletePost} posts={posts} setPosts={setPosts} />
        </div>
    );
}

export default AdminPage;