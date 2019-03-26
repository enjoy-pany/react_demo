import React, {
  Component
} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

  state = {
    userList: []
  }

  handleSubmitComment(item) {
    console.log(item)
    // 第一种方法
    // this.state.userList.push(item)
    // this.setState({
    //   userList: this.state.userList
    // })
    
    // 第二种方法
    // this.setState({
    //   userList: [...this.state.userList,item]
    // })

    // 第三种方法
    this.setState((state)=> {
      return (this.state.userList.splice(0,0,item))
    })
  }

  render() {
    return ( 
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}  
        />
        <CommentList userList={this.state.userList} />
      </div>
    )
  }
}
export default CommentApp