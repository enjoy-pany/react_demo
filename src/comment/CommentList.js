import React, {
    Component
  } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    userList: []
  }
  render() {
    return (
      <div>
        {this.props.userList.map((item, index)=> <Comment comment={item} key={index}>
          <div>slot header</div>
          <div>
            <h1>slot title</h1>
          </div>
        </Comment>)}
      </div>
    )
  }
}

export default CommentList