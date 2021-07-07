import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createPost } from '../actions';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      coverUrl: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    if (this.state.title && this.state.content) {
      this.props.createPost(this.state, this.props.history);
    } else {
      // eslint-disable-next-line no-alert
      alert('Post must have a title and content.');
    }
  }

  render() {
    return (
      <div id="create-post-container">
        <textarea
          id="title-container"
          name="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          id="content-container"
          name="content"
          placeholder="Content"
          defaultValue={this.state.content}
          onChange={this.handleChange}
        />
        <textarea
          id="cover-url-container"
          name="coverUrl"
          placeholder="Cover URL"
          defaultValue={this.state.coverURL}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>
          Create
        </Button>
      </div>
    );
  }
}

export default connect(null, { createPost })(CreatePost);
