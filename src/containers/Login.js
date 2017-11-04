import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { notifacation } from 'antd'
import UserLogin from 'src/components/user/UserLogin'

require('src/css/login.scss')

class Login extends Component {

  componentDidMount () {

  }

  componentWilReceiveProps (nextProps) {

  }

  render () {
    return (
      <div>
        <UserLogin/>
      </div>
    )
  }
}

function mapStateToProps (state) {

}

function mapDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
