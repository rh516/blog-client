import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: props.current.title,
      tags: props.current.tags,
      content: props.current.content,
      coverURL: props.current.coverURL,
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

  handleEditClick = () => {
    this.setState({ isEditing: true });
  }

  handleEditSubmit = () => {
    this.setState({ isEditing: false });

    const fields = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
      coverUrl: this.state.coverURL,
    };

    this.props.updatePost(this.props.match.params.postID, fields);
  }

  handleDelete = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  renderSomeSection = () => {
    if (this.state.isEditing) {
      return (
        <div className="edit-post-container">
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
          <button type="button" onClick={this.handleEditSubmit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div className="post-content-container">
          <h2>{this.props.current.title}</h2>
          <h5>{this.props.current.tags}</h5>
          <ReactMarkdown>{this.props.current.content || ''}</ReactMarkdown>
          <img className="image" src={this.props.current.coverUrl} alt="cover" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="post-container">
        {this.renderSomeSection()}
        <button type="button" onClick={this.handleEditClick}>Edit</button>
        <button type="button" onClick={this.handleDelete}>Delete</button>
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
