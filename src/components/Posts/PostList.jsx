import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const connector = connect(mapStateToProps);

const PostList = ({ posts }) => {
  return posts.map((post) => <PostListItem post={post} />);
};

export default connector(PostList);
