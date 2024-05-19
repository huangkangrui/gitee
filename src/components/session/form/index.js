import React from 'react';
import { Popover } from 'antd';

import styles from './index.less';

const oauthList = [
  {
    icon: 'icon-logo_aliyun',
    title: '使用阿里云账号登录',
    href: 'https://gitee.com/auth/aliyun',
  },
  {
    icon: 'icon-logo-gitlab',
    title: '使用GitLab账号登录',
    href: 'https://gitee.com/auth/gitlab',
  },
  {
    icon: 'icon-logo_huawei',
    title: '使用华为帐号登录',
    href: 'https://gitee.com/auth/huawei',
  },
  {
    icon: 'icon-logo_github',
    title: '使用 GitHub 帐号登录',
    href: 'https://gitee.com/auth/github',
  },
];
const otherOauthList = [
  {
    icon: 'icon-logo_weibo',
    title: '使用 Weibo 帐号登录',
    href: 'https://gitee.com/auth/weibo',
  },
  {
    icon: 'icon-logo-qq',
    title: '使用 QQ 帐号登录',
    href: 'https://gitee.com/auth/qq_connect',
  },
  {
    icon: 'icon-logo_windows',
    title: '使用 WindowsLive 帐号登录',
    href: 'https://gitee.com/auth/windowslive',
  },
  {
    icon: 'icon-logo_wechat',
    title: '使用微信帐号登录',
    href: 'https://gitee.com/auth/wechat',
  },
  {
    icon: 'icon-logo-dingding',
    title: '使用钉钉帐号登录',
    href: 'https://gitee.com/auth/dingding',
  },
  {
    icon: 'icon-logo_trustie',
    title: '使用 Trustie 帐号登录',
    href: 'https://gitee.com/auth/trustie',
  },
];

const SessionForm = ({ children }) => {
  return (<div className={styles['session-form']}>
    {children}
    <div className="session-login-oauth">
      <a className="session-login-oschina" href="https://gitee.com/auth/oschina">
        <li className="iconfont icon-logo_osc" />
        <span>
          使用 OSChina 帐号登录
        </span>
      </a>
      <div className="session-login-oauth-container">
        <div className="session-login-oauth-title">
          <span>其他方式登录</span>
        </div>
        <div className={styles['session-login-oauth-list']}>
          {oauthList.map((item, index) => (<div className="item" key={index} >
            <a href={item.href}><li className={`iconfont ${item.icon}`} title={item.title} /></a>
          </div>))}
          <Popover
            content={
              <div className="session-login-oauth-other-list">
                {otherOauthList.map((item, index) => (<div key={index} className="item">
                  <a href={item.href}>
                    <li className={`iconfont ${item.icon}`} title={item.title} />
                  </a>
                </div>))}
              </div>
            }
            overlayClassName={styles['popover-content']}
            placement="left">
            <div className="item">
              <li className="iconfont icon-action-more" />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  </div>);
};

export default SessionForm;
