import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:postId" component={Post} />
        <Route exact path="/newPost" component={NewPost} />
      </div>
    );
  }
}

export default App;
