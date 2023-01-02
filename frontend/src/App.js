import './App.css';
import UserPage from './components/userPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import { useEffect, useState } from 'react';
import AdminPage from './components/adminPage';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:9898/blogPosts")
      .then(res => res.json())
      .then(data => { setPosts(data); });

  }, []);

  const deletePost = (i) => {
    console.log(posts);
    posts.splice(i, 1);
    console.log(posts);
    fetch("http://localhost:9898/blogPosts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts)
    })
      .then(res => res.json())
      .then(data => { setPosts(data); });
  };
  return (
    <div className="App">
      <UserPage />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage posts={posts} deletePost={deletePost} />}></Route>
          <Route path='/admin' element={<AdminPage posts={posts} deletePost={deletePost} setPosts={setPosts} />}></Route>
          <Route path='/blog/:blogId' element={<DetailPage posts={posts} deletePost={deletePost} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
