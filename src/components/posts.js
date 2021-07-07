import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    const posts = this.props.posts.map((post) => {
      return (
        <NavLink to={`posts/${post.id}`}>
          <div className="post-item-container">
            {post.coverUrl ? <img src={post.coverUrl} alt="cover" /> : null}
            <h2>{post.title}</h2>
          </div>
        </NavLink>
      );
    });

    return posts;
  }

  render() {
    return (
      <div id="home-container">
        <h1>Welcome to My Super Awesome Blog!!</h1>
        <div id="posts-container">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    posts: reduxState.posts.all,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
