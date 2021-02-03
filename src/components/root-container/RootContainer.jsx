import React, { useEffect } from "react";
import { connect, useStore } from "react-redux";
import { getPosts } from "../../redux/actions";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router";

import Header from "../header/Header";
import Content from "../content/Content";
import { Moveout, Austria, Education, Work, Stuff } from "../labels/Labels";

import Footer from "../footer/Footer";

import style from "./RootContainer.module.scss";
import SinglePostContainer from "../article/single-post/SinglePostContainer";
import { NotFound } from "../not-found/NotFound";

const valueSelector = (state) => state.posts;

const Root = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const { getState } = useStore();
  const posts = valueSelector(getState());

  return (
    <Router>
      <div className={style.RootContainer_Wrapper}>
        <div className={style.RootContainer_Content}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route exact path="/moveout">
              <Moveout />
            </Route>
            <Route exact path="/austria">
              <Austria />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/stuff">
              <Stuff />
            </Route>
            <Route path="/posts/:slug">
              <SinglePostContainer posts={posts} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <div className={style.RootContainer_Footer}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);
