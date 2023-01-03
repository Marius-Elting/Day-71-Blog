import './App.css';
import UserPage from './components/userPage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetailPage from './components/DetailPage';
import { useEffect, useState } from 'react';
import AdminPage from './components/adminPage';

function App() {
  const [posts, setPosts] = useState();
  const [user, setUser] = useState(false);

  const userdata = { password: "Super(code)", username: "Super Coder" };

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

  const isUserAuth = (username, password) => {
    console.log("data is false");
    console.log(username);
    console.log(password);
    if (username === userdata.username && password === userdata.password) {
      console.log("data is correct");
      setUser(true);
    };
  };
  return (
    <div className="App">
      <UserPage />
      <BrowserRouter>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/admin">{user ? "Admin Bereich" : "Login"}</Link>
        </div>
        <Routes>
          <Route path='/' element={<UserPage posts={posts} deletePost={deletePost} />}></Route>
          <Route path='/admin' element={<AdminPage posts={posts} deletePost={deletePost} setPosts={setPosts} isUserAuth={isUserAuth} user={user} />}></Route>
          <Route path='/blog/:blogId' element={<DetailPage posts={posts} deletePost={deletePost} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
