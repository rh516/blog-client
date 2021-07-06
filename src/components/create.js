import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createPost } from '../actions';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
      coverURL: '',
    };
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

  handleSubmit = (event) => {
    if (this.state.title && this.state.tags && this.state.content) {
      this.props.createPost(this.state, this.props.history);
    }
  }

  render() {
    return (
      <div id="create-post-container">
        <textarea
          id="title-container"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          id="tags-container"
          placeholder="Tags"
          value={this.state.tags}
          onChange={this.handleTagsChange}
        />
        <textarea
          id="content-container"
          placeholder="Content"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <textarea
          id="cover-url-container"
          placeholder="Cover URL"
          value={this.state.coverURL}
          onChange={this.handleCoverURLChange}
        />
        <Button onClick={this.handleSubmit}>
          Create
        </Button>
      </div>
    );
  }
}

export default connect(null, { createPost })(CreatePost);
