import React from 'react';
import styles from './index.less'

const commentArr = [
  {
    title: '熊平',
    position: '51CTO创始人',
    content: '与其说喜欢 Gitee，其实更喜欢 Gitee 的团队。红薯是我见过的最幽默而执着的程序员，认真做产品，有耐心不功利，所以我相信 Gitee 一定会做的很好。'
  },
  {
    title: '阴明 ',
    position: '掘金创始人',
    content: '许多年轻的开发者使用 Gitee 共享和协作， Gitee 也是难得的为中国开发者的软件服务。期待未来 Gitee 继续发展，成为中国开发行业发展之基石！'
  },
  {
    title: '李铭健',
    position: '骑鹅旅行 Head of PMO',
    content: 'Gitee 企业版不只是一个代码托管的工具，更是带着深深 Geek 文化的项目管理平台。在 Gitee 企业版上，iGola.com 的团队协作变得更加容易，整个流程管理变得更加透明流畅。'
  },
  {
    title: '王安',
    position: 'DCloud CEO',
    content: '不少国内的好产品，因为用户的迷外心理而不被重视。其实一个友好的中文界面，可以让用户快速掌握软件的所有功能，实实在在地提升效率。期待更多开发者能重视 Gitee，重视国内认真做事的产品团队，他们会给你惊喜。'
  },
  {
    title: '霍泰稳',
    position: '极客邦科技创始人',
    content: '类似 GitHub 这样的代码托管服务，是软件研发过程中不可缺少的一环，在国内目前还没有特别好的服务，Gitee 很好地填补了这个空白。一起努力，越来越好，为中国技术人群提供更多更贴心的服务。'
  },
  {
    title: '阮一峰',
    position: '知名技术博主',
    content: 'Gitee 是国内代码托管服务的领先者，很认真的产品。适合国内程序员习惯，访问速度极快'
  },
  {
    title: '贤心',
    position: 'layui',
    content: 'Gitee 已成为我工作的依赖，从个人私有库到企业版，每一项解决方案都直击痛点。而它更吸引人的，是开放的姿态和优质的本土化基因。告诉世界：我们在自豪地使用 Gitee！'
  },
  {
    title: '韩卿',
    position: 'Apache Kylin',
    content: 'Gitee 为中国开发者提供了更好的本地化能力和服务，在促进中国开源发展上贡献巨大，非常期待 Gitee 更上层楼。'
  },
  {
    type: 'gitee',
    itemsArr: [
      {
        title: '开发者',
        number: '1200 万+',
      },
      {
        title: '代码仓库',
        number: '2800 万+',
      },
      {
        title: '企业用户',
        number: '30 万+',
      },
      {
        title: '高校',
        number: '2000+',
      },
    ]
  }


]

const comment = commentArr[Math.floor(Math.random() * commentArr.length)]
const SessionLeft = () => {
  return <div className={styles['session-sidebox']}>
    <div className="session-sidebox-container">
      <div className="session-sidebox-header">
        <div className="session-sidebox-logo">
          <img src={require('./images/logo.svg')} />
        </div>
        <h1 className="session-sidebox-title"></h1>
        <h2 className="session-sidebox-subtitle">企业级 DevOps 研发管理平台</h2>
      </div>
      {comment.type === 'gitee' ?
        <div className="session-sidebox-gitee">
          {
            comment.itemsArr.map(item => <div className="session-sidebox-gitee-item">
              <div className="session-sidebox-gitee-item-number">{item.number}</div>
              <div className="session-sidebox-gitee-item-title">{item.title}</div>
            </div>)
          }
        </div>
        :
        <div className="session-sidebox-content">
          <div className="session-sidebox-content-header">
            <span className="session-sidebox-content-title">
              {comment.title}
            </span>
            <span className="session-sidebox-content-position">
              {comment.position}
            </span>
          </div>
          <div className="session-sidebox-content-content">
            {comment.content}
          </div>
        </div>
      }
    </div>
    <div className="session-sidebox-footer">
      <a href="https://gitee.com/enterprises?from=login">
        <strong className="session-sidebox-icon-hot">Gitee 企业版</strong>
        <span className="session-sidebox-divider">-</span>{" 企业级 DevOps 研发管理平台 "}
        <i class="iconfont icon-arrow-circle-right"></i>
      </a>
    </div>
  </div>
}

export default SessionLeft