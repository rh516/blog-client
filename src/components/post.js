import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import withRouter from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: '',
      tags: '',
      content: '',
      coverURL: '',
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleTagsChange = (event) => {
    this.setState({ tags: event.target.value });
  }

  handleContentChange = (event) => {
    this.setState({ content: event.target.value });
  }

  handleCoverURLChange = (event) => {
    this.setState({ coverURL: event.target.value });
  }

  render() {
    return (
      <div className="post-container">
        <h2>{this.props.current.title}</h2>
        <h5>{this.props.current.tags}</h5>
        <ReactMarkdown>{this.props.current.coverURL || ''}</ReactMarkdown>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  current: reduxState.posts.current,
});

export default withRouter(connect(mapStateToProps, {
  fetchPost, deletePost, updatePost,
})(Post));
