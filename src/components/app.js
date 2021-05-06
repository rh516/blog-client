import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import CreatePost from './create';
import Posts from './posts';

// const Posts = (props) => {
//   return (
//     <div>
//       Posts go here.
//     </div>
//   );
// };

const FallBack = (props) => {
  return <div>Post Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/posts/new">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

/* <Switch>
  <Route exact path="/" component={Posts} />
  <Route path="/posts/new" component={NewPost} />
  <Route path="/posts/:postID" component={Post} />
  <Route render={() => (<div>post not found </div>)} />
</Switch> */

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={CreatePost} />
          <Route exact path="/posts/:postID" />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
