import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';

import { phoneReg } from '@/utils/validator';

import styles from './index.less';

const LoginForm = () => {
  const [loginType, setLoginType] = useState('password1');
  const [form] = Form.useForm();
  return (<div className={styles.form}>
    <div className="form-header">
      <h2 className="form-header-title">登录</h2>
      <div>没有账号？<NavLink to="/signup">点此注册</NavLink></div>
    </div>
    {'password' === loginType ?
      <Form
        name="basic"
        form={form}
        initialValues={{
          remember: true,
        }}
        autoComplete="off">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '用户名为必填项',
            },
          ]}>
          <Input placeholder="手机／邮箱／个人空间地址" />
        </Form.Item>

        <Form.Item
          name="password">
          <Input.Password placeholder="请输入密码" iconRender={() => ''} />
        </Form.Item>
        <div className="two-fields">
          <Form.Item
            name="remember"
            valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a className="toggle-button" onClick={() => setLoginType('message')}>短信验证登录</a>
        </div>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      :
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off">
        <Form.Item
          name="phone"
          rules={[
            {
              validator: (rule, value) => {
                if (!value) {
                  return Promise.reject('手机号码为必填项');
                }
                if (!value.match(phoneReg)) {
                  return Promise.reject('手机号码格式不正确');
                }
              },
            },
          ]}>
          <Input placeholder="手机号码" />
        </Form.Item>


        <Form.Item
          name="password"
          dependencies={['phone']}
          rules={[
            {
              validator: (rule, value) => {
                if (!value) {
                  return Promise.reject('验证码为必填项');
                }
                if (6 !== value.length) {
                  return Promise.reject('验证码格式不正确');
                }
              },
            },
          ]}>
          <Input
            placeholder="手机验证码"
            addonAfter={<Button className="send-button" ghost type="primary">发送验证码</Button>} />
        </Form.Item>
        <div className="two-fields">
          <Form.Item
            name="remember"
            valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a className="toggle-button" onClick={() => setLoginType('password')}>用户密码登录</a>
        </div>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    }
  </div>);
};

export default LoginForm;
