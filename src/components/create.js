import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
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
    this.props.createPost(this.state, this.props.history);

    this.setState({
      title: '',
      tags: '',
      content: '',
      coverURL: '',
    });
  }

  render() {
    return (
      <div id="create-post-container">
        <TextareaAutosize
          id="title-container"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <TextareaAutosize
          id="tags-container"
          placeholder="Tags"
          value={this.state.tags}
          onChange={this.handleTagsChange}
        />
        <TextareaAutosize
          id="content-container"
          placeholder="Content"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <TextareaAutosize
          id="cover-url-container"
          placeholder="Cover URL"
          value={this.state.coverURL}
          onChange={this.handleCoverURLChange}
        />
        <input
          id="submit-button"
          type="submit"
          value="Create"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { createPost })(CreatePost);
