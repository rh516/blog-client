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
        <div className="post-item-container">
          {post.coverUrl ? <img src={post.coverUrl} alt="cover" /> : null}
          <NavLink to={`posts/${post.id}`}>
            <h2>{post.title}</h2>
          </NavLink>
        </div>

      );
    });

    return posts;
  }

  render() {
    return (
      <div id="posts-container">
        {this.renderPosts()}
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
