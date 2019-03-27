import React, { Component } from 'react'

class Comment extends Component {
  state = {
    timeString: ''
  }

  componentWillMount() {
    this._updateTimeStr()
    // this._timer = setInterval(
    //   this._updateTimeStr.bind(this),
    //   5000
    // )
  }

  _updateTimeStr() {
    const {createdTime} = this.props.comment
    const duration = (+new Date() - createdTime) / 1000
    console.log('duration=======>',duration);
    
    this.setState({
      timeString: duration > 60
      ? `${Math.round(duration/60)} 分钟前`
      : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  render () {
    console.log('this.props.children=======>',this.props.children);
    
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
      </div>
    )
  }
}

export default Comment