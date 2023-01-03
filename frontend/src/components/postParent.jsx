import PostChild from "./postChild";

function PostParent({ posts, page, deletePost, setPosts }) {

    return (
        <div className="ParentContainer">
            {posts?.map((data, index) =>
                <PostChild a={index} posts={data} setPosts={setPosts} page={page} deletePost={deletePost} />
            )}
        </div>
    );
}

export default PostParent;