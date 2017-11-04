import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginTest from '../components/user/LoginTest'
import { login } from '../reducer/modules/user';
import { Button } from 'antd'
// import UserLogin from '../components/user/UserLogin'

// require('../css/login.scss')

class Login extends Component {

  handleClick = () => {
    const login = this.props.login;
    login(true);
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <LoginTest/>
        <Button onClick={this.handleClick} >登录</Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    loginState: state.user.isLogin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
