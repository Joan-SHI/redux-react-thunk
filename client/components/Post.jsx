import React from 'react'

const Post = ({ title, selftext, created }) => (
  <div>
    <div>{title}</div>
    <div>{selftext}</div>
    <div>{convertSecondsEpochToDateString(created)}</div>
    <br></br>
  </div>
)

const convertSecondsEpochToDateString = (epochInSeconds) => {
  return (new Date(epochInSeconds * 1000)).toString()
}

export default Post
