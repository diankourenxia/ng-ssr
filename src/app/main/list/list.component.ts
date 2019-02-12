import { Component, OnInit } from '@angular/core';
import { baseInfo } from '../database/baseInfo';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList = [
    {
      content: '完成博客系统mongodb集合的设计',
      createTime: '2019.4.5',
      status: 'done'
    },
    {
      content: '使用electron+angular创建桌面应用',
      createTime: '2019.4.6',
      status: 'todo'
    },
    {
      content: '使用flutter创建app应用',
      createTime: '2019.4.7',
      status: 'todo'
    },
    {
      content: '网站seo',
      createTime: '2019.4.7',
      status: 'todo'
    },
    {
      content: 'nest',
      createTime: '2019.4.7',
      status: 'todo'
    },
    {
      content: 'pm2的使用,查看数据',
      createTime: '2019.4.7',
      status: 'todo'
    },
    {
      content: 'mongodb在服务端的查看',
      createTime: '2019.4.7',
      status: 'todo'
    },
    {
      content: '服务端渲染实现',
      createTime: '2019.2.11',
      status: 'todo',
      didUrl: null
    },
    {
      content: '正则的学习',
      createTime: '2019.2.11',
      status: 'todo'
    },
    {
      content: 'node版本更新后别的命令不能用',
      createTime: '2019.2.11',
      status: 'todo'
    }
  ];
  didList = [
    {
      title: 'koa+mongodb初探',
      describe: '初步:搭建好koa,mongodb,启动mongodb服务,在koa中使用mongoose链接mongodb',
      author: 'hugh',
      createTime: '2019.2.12',
      updataTime: '2019.2.12',
      linkList: [
        {
          title: 'xxx',
          url: 'https://blog.csdn.net/zt15732625878/article/details/78941268',
          des: 'xxx'
        }
      ],
      categorys: ['koa', 'mongodb', 'mongoose'],
      contentList: [
        {
          content: '',
          commitList: [
            {
              operator: 'xxx',
              content: 'xsfsdfs',
              createTime: '',
              responseList: [
                {
                  to: 'xxx',
                  operator: 'xxx',
                  content: 'xsfsdfs',
                  createTime: '',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: '在服务器上搭建koa+mongodb服务',
      content: '远程服务器的登录ssh,创建访问用户,启动服务,绑定域名,使用域名访问',
      author: 'hugh',
      createTime: '2019.2.12',
      categorys: ['服务器', 'ssh', 'nodejs']
    },
    {
      title: 'koa服务端调试502',
      content: '查看日志是否报错,解决报错后重试,本次问题是本地开发node版本与服务器node版本不一致导致,解决:可以使用.nvmrc统一',
      author: 'hugh',
      linkList: [
        {
          des: 'x',
          url: 'https://www.cnblogs.com/kongxianghai/p/5660101.html',
          title: 'x'
        }
      ],
      createTime: '2019.2.12',
      categorys: ['问题手册']
    },
    {
      title: 'git stash使用',
      content: 'git stash pop等',
      author: 'hugh',
      linkList: [
        {
          title: 'git stash使用',
          des: '',
          url: 'https://www.cnblogs.com/tocy/p/git-stash-reference.html'
        }
      ],
      createTime: '2019.2.12',
      categorys: ['服务器', 'ssh', 'nodejs']
    },
    {
      title: 'pm2日志服务',
      content: '远程服务器的登录ssh,创建访问用户,启动服务,绑定域名,使用域名访问',
      linkList: [
        {
          title: 'log4',
          url: 'https://blog.csdn.net/xiaoyangerbani/article/details/82319876',
          des: null
        }
      ],
      author: 'hugh',
      createTime: '2019.2.12',
      categorys: ['服务器', 'ssh', 'nodejs']
    },
    {
      title: '在服务器上搭建koa+mongodb服务',
      content: '远程服务器的登录ssh,创建访问用户,启动服务,绑定域名,使用域名访问',
      author: 'hugh',
      createTime: '2019.2.12',
      categorys: ['服务器', 'ssh', 'nodejs']
    },
    {
      title: '在服务器上搭建koa+mongodb服务',
      content: '远程服务器的登录ssh,创建访问用户,启动服务,绑定域名,使用域名访问',
      author: 'hugh',
      createTime: '2019.2.12',
      categorys: ['服务器', 'ssh', 'nodejs']
    }
  ];
  baseInfo = baseInfo;
  constructor() { }

  ngOnInit() {
  }

}
