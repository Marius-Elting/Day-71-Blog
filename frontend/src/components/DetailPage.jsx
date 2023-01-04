import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import ABC from "./abc";
function DetailPage({ posts }) {
    const { blogId } = useParams();
    const navigate = useNavigate();


    console.log(posts);
    if (posts === undefined) {
        console.log("No posts found");
        return;
    };
    return (
        <div>
            <img src={`http://localhost:9898/${posts[blogId].picture}`} alt={posts[blogId].title}></img>
            <h1>{posts[blogId].title}</h1>
            <p>{posts[blogId].message}</p>
            <p>{posts[blogId].author}</p>
            <button onClick={() => navigate(-1)}>Back to Home</button>
        </div>
    );
}

export default DetailPage;