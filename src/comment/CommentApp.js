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

    // 第三种方法 （没弄明白）
    this.setState((state)=> {
      return this.state.userList.splice(0,0,item)
    }, ()=> {
      console.log('this.state=======>',this.state);
    })

    // this.setState((state)=> {
    //   state.userList.splice(0,0,item)
    //   return {userList: state.userList}
    // },()=> {
    //   console.log('this.state.userList=======>',this.state.userList); 
    // })
    
    // this.state.userList.splice(0,0,item)
    // this.setState({
    //   userList: this.state.userList
    // },()=> {
    //   console.log('this.state.userList=======>',this.state.userList);
    // })

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