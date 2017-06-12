/**
 * because component file :
 * export class ManageCoursePage --> import {ManageCourseContainer}
 * export default ManageCoursePage --> import ManageCourseContainer
 * we need to disale syntax checking by eslint
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';

export default(
  <Router history={ browserHistory }>
    <Route path="/" component={App}></Route>
  </Router>
);
