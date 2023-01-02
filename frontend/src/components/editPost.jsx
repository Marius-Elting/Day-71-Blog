import { useRef } from "react";

function EditPost({ setPosts, posts, postIndex, setEdit }) {

    const message = useRef("");
    const file = useRef(null);
    const title = useRef("");
    const author = useRef("");

    const sendData = (i) => {

        console.log(posts);
        fetch("http://localhost:9898/blogPosts")
            .then(res => res.json())
            .then(data => {
                console.log(title);
                if (title.current.value === "") {
                } else {
                    data[postIndex].title = title.current.value;
                }
                if (message.current.value === "") {
                } else {
                    data[postIndex].message = message.current.value;
                }
                if (author.current.value === "") {
                } else {
                    data[postIndex].author = author.current.value;
                }
                setPosts(data);
                fetch("http://localhost:9898/blogPosts", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                }
                ).then(() => {
                    setEdit(null);

                });
            });
    };
    return (

        <section>
            <h2>bearbeite Post</h2>
            <input ref={title} type={"text"} name="title" placeholder="Title"></input>
            <textarea ref={message} name="message" placeholder="dein Text hier"></textarea>
            <input ref={author} type={"text"} name="author" placeholder="Your Name"></input>
            <div>
                {/* <input ref={file} type="file" name="picture"></input> */}
            </div>
            <button onClick={sendData}>Publih</button>
        </section>


    );
}

export default EditPost;