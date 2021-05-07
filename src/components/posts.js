import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    const posts = this.props.posts.map((post) => {
      return (
        <div className="post-item-container">
          <NavLink to={`posts/${post.id}`} id="link">
            <h2>{post.title}</h2>
          </NavLink>
          <h4>{post.tags}</h4>
          <img className="image" src={post.coverUrl} alt="cover" />
        </div>

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
