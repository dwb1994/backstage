import React, { Component } from 'react'
import { Button, Form, Icon, Input, Modal } from 'antd'

// const messages = defineMessages({
//   loginTitle: {
//       id: 'UserLogin.title',
//       defaultMessage: '欢迎使用供应链金融管理平台',
//       tagName: 'p'
//     },
//     accountPlaceholder: {
//       id: 'UserLogin.account.placeholder',
//       defaultMessage: '请输入邮箱'
//     },
//     passwordPlaceholder: {
//       id: 'UserLogin.password.placeholder',
//       defaultMessage: '请输入密码'
//     },
//     passwordAlert: {
//       id: 'UserLogin.password.alert',
//       defaultMessage: '请确认密码'
//     },
//     loginButton: {
//       id: 'UserLogin.button',
//       defaultMessage: '登录'
//     },
//     wechatLogin: {
//       id: 'UserLogin.wechatLogin',
//       defaultMessage: '微信登录'
//     },
//     forgetPasswordLink: {
//       id: 'UserLogin.forgetPasswordLink',
//       defaultMessage: '忘记密码?'
//     },
//     forgetPasswordTitle: {
//       id: 'UserLogin.forgetPasswordTitle',
//       defaultMessage: '忘记密码'
//     },
//     forgetPasswordEmail: {
//       id: 'UserLogin.forgetPasswordEmail',
//       defaultMessage: '电子邮箱地址'
//     },
//     forgetPasswordInvalidEmail: {
//       id: 'UserLogin.forgetPasswordInvalidEmail',
//       defaultMessage: '无效的电子邮箱地址'
//     },
//     forgetPasswordPlaceholder: {
//       id: 'UserLogin.forgetPasswordPlaceholder',
//       defaultMessage: '请输入电子邮箱地址'
//     },
//     forgetPasswordInvitedEmail: {
//       id: 'UserLogin.forgetPasswordInvitedEmail',
//       defaultMessage: '受邀电子邮箱地址'
//     },
//     forgetPasswordConfirm: {
//       id: 'UserLogin.forgetPasswordConfirm',
//       defaultMessage: '确定'
//     }
// })
const createForm = Form.create
const FormItem = Form.Item

class UserLogin extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div classNmae="container">
          <img src="//cdn.redshift.cc/web/util/logo.png" alt="img" />
          <p>欢迎登录供应链金融管理后台系统</p>
          <div className="hr" />
          <div className="login-form">
            <div className="login-title">登录</div>
            <div className="error-container">{this.props.error && this.props.error.error ? <span className="error-content">{this.props.error.error.chi}</span> : <span>&nbsp;</span>}</div>
            <Form className='form-container'>
              <FormItem>
               {getFieldDecorator('userName', {
                 rules: [{ required: true, message: '请输入用户名!' }],
               })(
                 <Input prefix={<Icon type="user" className="reg-icon" style={{ fontSize: 13 }} />} placeholder="用户名" />
               )}
             </FormItem>
             <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" className="reg-icon" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                )}
              </FormItem>
              <div className='forget-password'>
                <a onClick={this.showModal}>
                  忘记密码？
                </a>
                <Modal
                  confirmLoading={this.props.isSendingEmail}
                  footer=''
                  maskClosable={false}
                  onCancel={this.handleCancel}
                  title='忘记密码'
                  visible={this.state.visible}
                  width='448px'
                >
                  <span>ModalHTML</span>
                </Modal>
              </div>
              <FormItem>
                <Button
                  type='primary'
                  className='reg-btn'
                  onClick={() => this.handleSubmit()}
                >
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
          <div className="login-footer">
            Powered by Redshift © 2016 北京红移科技有限公司 京ICP备16043646号-1
          </div>
        </div>
      </div>
    )
  }
}

export default createForm()(UserLogin)
