//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    nav: [{
          id: 'public',
          name: '招标公告',
          open: false,
          pages: [{
            name: '可投标工程',
            url:'recently'
          },{
            name: '投过工程',
            url:'past'
          },{
            name: '中标工程',
            url:'win'
          }]
      },{
          id: 'tools',
          name: '工具',
          open: false,
          pages: [{
            name: '企业信息查询',
            url:'company_query'
          },{
            name: '其它中标公告',
            url:'win_public'
          },{
            name: '业务管理',
            url:'operation_control'
          }]
      }
    ]
  },
  
  onLoad: function () {
    
  }
})
