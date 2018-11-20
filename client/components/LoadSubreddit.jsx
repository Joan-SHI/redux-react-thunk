import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input name='name' onChange={this.handleChange} value={this.state.name}/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.name))}>
          Fetch Posts
        </button>
        
      </div>
    )
  }

}

export default connect()(LoadSubreddit)
