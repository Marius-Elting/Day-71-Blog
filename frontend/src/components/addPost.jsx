import { useRef } from "react";

function AddPost({ setPosts }) {

    const message = useRef("");
    const file = useRef(null);
    const title = useRef("");
    const author = useRef("");

    const sendData = () => {
        const form = new FormData();
        console.log(file.current.files);
        form.append("picture", file.current.files[0]);
        form.append("title", title.current.value);
        form.append("message", message.current.value);
        form.append("author", author.current.value);
        fetch("http://localhost:9898/blogPosts", {
            method: "POST",
            body: form
        })
            .then(res => res.json())
            .then(data => { setPosts(data); });
    };
    return (

        <section className="addPost">
            <h2>Poste etwas</h2>
            <input ref={title} type={"text"} name="title" placeholder="Titel"></input>
            <textarea ref={message} name="message" placeholder="Dein Text hier"></textarea>
            <input ref={author} type={"text"} name="author" placeholder="Dein Name"></input>
            <input ref={file} type="file" name="picture"></input>
            <button onClick={sendData}>Public</button>
        </section>


    );
}

export default AddPost;