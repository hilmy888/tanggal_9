import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavigationHelper from './NavigationHelper'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import CreatePost from '../screens/CreatePost'
import PostList from '../screens/PostList'
import PostDetail from '../screens/PostDetail'

function Base() {
  return (
    <Fragment>
      <Router>
        <NavigationHelper />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/create-post/new">
            <CreatePost />
          </Route>
          <Route exact path="/post-list">
            <PostList />
          </Route>
          <Route path="/post-list/:id">
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}
export default Base
