import React, {
    Component
  } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleSetState(key,event) {
    this.setState({
      [key]: event.target.value
    })
  }


  handleSubmit() {
    if(this.props.onSubmit) {
      const {username, content} = this.state

      if (!username) return alert('请输入用户名')
      if (!content) return alert('请输入评论内容')

      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }
  
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
              value={this.state.username}
              // onChange={this.handleSetState.bind(this, 'username')}
              onChange={(e)=> {this.handleSetState('username', e)}}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              value={this.state.content}
              onChange={this.handleSetState.bind(this, 'content')}
              />
          </div>
        </div>
        <div className='comment-field-button'>
          <button 
            onClick={this.handleSubmit.bind(this)}  
          >
              发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput