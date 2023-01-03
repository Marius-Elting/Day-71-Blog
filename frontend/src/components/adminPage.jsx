import { useEffect, useState, useRef } from "react";
import AddPost from "./addPost";
import PostParent from "./postParent";

function AdminPage({ deletePost, posts, setPosts, user, isUserAuth }) {
    console.log("admin mounted");
    const userName = useRef();
    const password = useRef();
    return (
        <div>
            {user ? <div>
                <AddPost setPosts={setPosts} />
                <PostParent page={"admin"} deletePost={deletePost} posts={posts} setPosts={setPosts} /> </div> :
                <div className="Login">
                    <input type={"text"} ref={userName} placeholder="username"></input>
                    <input type={"password"} ref={password} placeholder="passwort"></input>
                    <button onClick={() => isUserAuth(userName.current.value, password.current.value)}>Login</button>
                </div>}


        </div>
    );
}

export default AdminPage;