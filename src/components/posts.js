import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    const posts = this.props.posts.map((post) => {
      return (
        <h2>{post.title}</h2>
      );
    });

    return posts;
  }

  render() {
    return (
      <ul id="posts-container">
        {this.renderPosts()}
      </ul>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    posts: reduxState.posts.all,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
