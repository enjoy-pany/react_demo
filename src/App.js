import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <h1>header</h1>
    )
  }
}

class LikeButton extends Component {
  static defaultProps = {
    myName: '我就是我，不一样的烟火'
  }
  render() {
    return (
      <p>{this.props.myName}</p>
    )
  }
}

class UserList extends Component {
  render() {
    const { user } = this.props
    return(
      <div>
        <p>姓名：{user.username}</p>
        <p>年龄：{user.age}</p>
      </div>
    )
    
  }
}

class MainCon extends Component {
  state= {
    name: '我是bb,我才是火',
    users: [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ] 
  }
  setName = ()=> {
    this.setState({name: '一群渣渣，火火火火'})
  }
  render() {
    return (
      <div>
        {this.state.users.map((user,index)=>
          <UserList
            key = {index}
            user = {user}
          />
        )}
        <LikeButton
          myName = {this.state.name}
        />
        <button onClick={this.setName}>变身</button>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <h1>footer</h1>
    )
  }
}
class App extends Component {
  state = {
    count: 0
  }
  getNotificationsCount = ()=> {
    this.setState({count: (Math.random()*10).toFixed(0)})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header" onClick={this.getNotificationsCount}>
          {this.state.count>0
          ?<p>
              Learn React {this.state.count}
            </p>
          :<p>
            Learn React none
          </p>
          }
        </div>
        <Header />
        <MainCon />
        <Footer />
      </div>
    );
  }
}

export default App;