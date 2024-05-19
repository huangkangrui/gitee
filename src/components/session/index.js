import React from 'react';

import SessionForm from './form';
import styles from './index.less';
import Sidebox from './sidebox';

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
];


const Session = ({ children }) => {
  return (<div className={styles.session}>
    <div className="session-body">
      <Sidebox />
      <SessionForm>{children}</SessionForm>
    </div>
    <div className="session-footer">
      {
        footerItemArr.map(item => <a key={item.name} className="session-footer-item" href={item.href}>{item.name}</a>)
      }
    </div>
  </div>);
};

export default Session;
