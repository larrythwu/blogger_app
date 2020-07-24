import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
    };
  }

  async componentDidMount() {
    const posts = (await axios.get("/posts")).data;
    this.setState({
      posts,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="/newPost">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-body">
                <h4 className="card-title">+ New Post</h4>
              </div>
            </div>
          </Link>
          {this.state.posts === null && <p>Loading</p>}
          {this.state.posts != null &&
            this.state.posts.map((question) => (
              <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/posts/${question._id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">{question.title}</div>
                    <div className="card-body">
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Posts;
