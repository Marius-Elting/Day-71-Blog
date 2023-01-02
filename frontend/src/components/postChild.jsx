import { Link } from "react-router-dom";
import { useState } from "react";
import EditPost from "./editPost";
function PostChild({ posts, a, page, deletePost, setPosts }) {
    // console.log(posts);
    const [edit, setEdit] = useState();
    console.log(a);
    console.log(posts);
    return (
        <div>
            <Link to={`/blog/${a}`}>
                <img src={`http://localhost:9898/${posts.picture}`} alt={posts.title}></img>
                <h1>{posts.title}</h1>
                <p>{posts.message}</p>
                <p>{posts.author}</p>
            </Link>
            {page === "admin" ? <button onClick={() => deletePost(a)}>Delete Post</button> : ""}
            {page === "admin" ? <button onClick={() => { setEdit(a); }}>Edit Post</button> : ""}
            {edit == a ? <EditPost setEdit={setEdit} setPosts={setPosts} posts={posts} postIndex={a} /> : ""}
        </div>
    );
}

export default PostChild;