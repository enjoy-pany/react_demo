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

  componentWillMount() {
    this._loadUserName()
  }

  componentDidMount() {
    this.textarea.focus()
  }

  _saveUserName(username) {
    if(localStorage) {
      localStorage.setItem('username', username)
    }
  }
  _loadUserName() {
    if(localStorage) {
      const username = localStorage.getItem('username')      
      if(username) {
        this.setState({
          username
        })
      }
    }
  }

  handleUserNameBlur(event) {
    this._saveUserName(event.target.value)
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

      this.props.onSubmit({username, content, createdTime: +new Date()})
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
              onBlur={this.handleUserNameBlur.bind(this)}
              onChange={(e)=> {this.handleSetState('username', e)}}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              value={this.state.content}
              ref={(el)=> this.textarea = el}
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