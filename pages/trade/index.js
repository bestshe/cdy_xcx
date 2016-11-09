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
          id: 'win_public',
          name: '中标公告',
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
      }
    ]
  },
  
  onLoad: function () {
    
  }
})
