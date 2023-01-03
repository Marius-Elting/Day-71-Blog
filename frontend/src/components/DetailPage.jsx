import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
function DetailPage({ posts }) {
    const params = useParams();
    const navigate = useNavigate();


    console.log(posts);
    console.log(params.blogId);
    if (posts === undefined) {
        console.log("No posts found");
        return;
    };
    return (
        <div>
            <img src={`http://localhost:9898/${posts[params.blogId].picture}`} alt={posts[params.blogId].title}></img>
            <h1>{posts[params.blogId].title}</h1>
            <p>{posts[params.blogId].message}</p>
            <p>{posts[params.blogId].author}</p>
            <button onClick={() => navigate(-1)}>Back to Home</button>
        </div>
    );
}

export default DetailPage;