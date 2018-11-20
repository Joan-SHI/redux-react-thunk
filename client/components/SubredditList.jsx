import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
// let d = new Date ();
// d.setDate(post.created)

  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        selftext={post.selftext}
        created={post.created}

      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
