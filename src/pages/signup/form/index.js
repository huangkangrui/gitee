import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Tooltip } from 'antd';

import { emailReg, passwordReg, phoneReg } from '@/utils/validator';

import styles from './index.less';

const LoginForm = () => {
  return (<div className={styles.form}>
    <div className="form-header">
      <h2 className="form-header-title">注册</h2>
      <div>已有账号？<NavLink to="/">点此登录</NavLink></div>
    </div>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      autoComplete="off">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '姓名为必填项',
          },
        ]}>
        <Input placeholder="姓名" />
      </Form.Item>
      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: '个人空间地址为必填项',
          },
        ]}>
        <Input placeholder="个人空间地址" addonBefore="https://gitee.com/" suffix={<Tooltip trigger="click" placement="topRight" title="这是您注册帐号主页的地址，可用作推拉代码或登录 Gitee 的用户名个人空间地址 是用户在 Gitee 上的唯一标识，在开通 Gitee 帐号时填写您可以将个人空间地址分享给朋友，让他们通过您的个人空间地址访问您的 Gitee 主页每个帐号只能对应一个个人空间地址，建议您在注册时为您的帐号精心起一个好名字"><li className="iconfont icon-help-circle" /></Tooltip>} />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            validator: (rule, value) => {
              if (!value) {
                return Promise.reject('手机号码为必填项');
              }
              if (!value.match(phoneReg) && !value.match(emailReg)) {
                return Promise.reject('请输入正确的手机号码（支持澳门台湾）或邮箱');
              }
            },
          },
        ]}>
        <Input placeholder="手机号码" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            validator: (rule, value) => {
              if (!value) {
                return Promise.reject('密码为必填项');
              }
              if (6 > value.length || 32 < value.length) {
                return Promise.reject('密码的长度必须是 6-32 位');
              }
              if (!value.match(passwordReg)) {
                return Promise.reject('密码必须包含数字，且必须包含字母或其它符号（!@_#$%^&*()-+=,.?）');
              }
            },
          },
        ]}>
        <Input.Password placeholder="密码不少于6位" />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked">
        <Checkbox>我已阅读并同意 <a href="https://gitee.com/terms">使用条款</a> 及 <a href="https://gitee.com/inactive_accounts">非活跃帐号处理规范</a></Checkbox>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          立即注册
        </Button>
      </Form.Item>
    </Form>
  </div>);
};

export default LoginForm;
