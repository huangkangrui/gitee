import React from 'react';

import styles from './index.less'
import SessionLeft from './sidebox';

const footerItemArr = [
  {
    name: '© Gitee.com',
    href: 'https://gitee.com/',
  },
  {
    name: '关于我们',
    href: 'https://gitee.com/about_us',
  },
  {
    name: '使用条款',
    href: 'https://gitee.com/terms',
  },
  {
    name: '帮助文档',
    href: 'https://help.gitee.com/',
  },
  {
    name: '在线自助服务',
    href: 'https://gitee.com/self_services',
  },
  {
    name: '重发激活邮件',
    href: 'https://gitee.com/user/activate',
  },
]


const Session = ({ chidren }) => {

  return <div className={styles.session}>
    <div className="session-body">
     <SessionLeft />
    </div>
    <div className="session-footer">
      {
        footerItemArr.map(item => <a key={item.name} className="session-footer-item" href={item.href}>{item.name}</a>)
      }
    </div>
  </div>
}

export default Session