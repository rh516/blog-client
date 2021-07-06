import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Button from '@material-ui/core/Button';
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
          <textarea
            id="title-container"
            placeholder="Title"
            defaultValue={this.props.current.title}
            onChange={this.handleTitleChange}
          />
          <textarea
            id="tags-container"
            placeholder="Tags"
            defaultValue={this.props.current.tags}
            onChange={this.handleTagsChange}
          />
          <textarea
            id="content-container"
            placeholder="Content"
            defaultValue={this.props.current.content}
            onChange={this.handleContentChange}
          />
          <textarea
            id="cover-url-container"
            placeholder="Cover URL"
            defaultValue={this.props.current.coverUrl}
            onChange={this.handleCoverURLChange}
          />
          <Button type="button" onClick={this.handleEditSubmit}>Submit</Button>
        </div>
      );
    } else {
      return (
        <div className="post-content-container">
          <h2>{this.props.current.title}</h2>
          <h5>{this.props.current.tags}</h5>
          <ReactMarkdown>{this.props.current.content || ''}</ReactMarkdown>
          {this.props.current.coverUrl ? <img src={this.props.current.coverUrl} alt="cover" /> : null}
          <div className="post-buttons-container">
            <Button onClick={this.handleEditClick}>Edit</Button>
            <Button onClick={this.handleDelete}>Delete</Button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="post-container">
        {this.renderSomeSection()}
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
