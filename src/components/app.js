import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import CreatePost from './create';
import Posts from './posts';
import Post from './post';

const FallBack = (props) => {
  return <div>Post Not Found</div>;
};

const Nav = (props) => {
  return (
    <AppBar>
      <Toolbar id="toolbar">
        <IconButton>
          <NavLink className="navbar-icon" to="/" exact><HomeIcon /></NavLink>
        </IconButton>
        <IconButton>
          <NavLink className="navbar-icon" to="/posts/new"><AddIcon /></NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const App = (props) => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={CreatePost} />
        <Route exact path="/posts/:postID" component={Post} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

export default App;
