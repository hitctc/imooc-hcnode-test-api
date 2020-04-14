import {
  Base64
} from 'js-base64'

//index.js
//获取应用实例

Page({
  onGetToken() {
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            url: 'http://localhost:3001/v1/token',
            method: 'POST',
            data: {
              account: res.code,
              type: 100
            },
            success: (res) => {
              console.log(res)
              console.log(res.data)
              const code = res.statusCode.toString()
              if (code.startsWith('2')) {
                wx.setStorageSync('token', res.data.token)
              }
            }
          })
        }
      }
    })
  },

  onVerifyToken() {
    wx.request({
      url: 'http://localhost:3001/v1/token/verify',
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      success: (res) => {
        console.log(res)
        // console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetLaTest() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/latest',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetNext() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/8/next',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetLast() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/8/last',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetUserlike() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/100/1/favor',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetLatestDesc() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/100/1',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetFavor() {
    wx.request({
      url: 'http://localhost:3001/v1/classic/favor',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onLike() {
    wx.request({
      url: 'http://localhost:3001/v1/like',
      method: 'POST',
      // v.get('body.art_id'), v.get('body.type'), ctx.auth.uid
      data: {
        art_id: 1,
        type: 100
      },
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onDisLike() {
    wx.request({
      url: 'http://localhost:3001/v1/like/cancel',
      method: 'POST',
      // v.get('body.art_id'), v.get('body.type'), ctx.auth.uid
      data: {
        art_id: 1,
        type: 100
      },
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetHotBookList() {
    wx.request({
      url: 'http://localhost:3001/v1/book/hot_book',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetBookDetail() {
    wx.request({
      url: 'http://localhost:3001/v1/book/1120/detail',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetBookSearch() {
    wx.request({
      url: 'http://localhost:3001/v1/book/search',
      method: 'GET',
      contentType: 'application/x-www-form-urlencoded:charset=UTF-8',
      header: {
        Authorization: this._encode()
      },
      data: {
        q: '游戏',
        // count: 5,
        // start: 5
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetBookFavorCount() {
    wx.request({
      url: 'http://localhost:3001/v1/book/favor/count',
      method: 'GET',
      contentType: 'application/x-www-form-urlencoded:charset=UTF-8',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetMyBookFavor() {
    wx.request({
      url: 'http://localhost:3001/v1/book/1200/favor',
      method: 'GET',
      contentType: 'application/x-www-form-urlencoded:charset=UTF-8',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onAddComment() {
    wx.request({
      url: 'http://localhost:3001/v1/book/add/short_comment',
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded:charset=UTF-8',
      header: {
        Authorization: this._encode()
      },
      data: {
        content: "点赞点赞",
        book_id: 1120
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
        // const code = res.statusCode.toString()
        // if (code.startsWith('2')) {
        //   wx.setStorageSync('token', res.data.token)
        // }
      }
    })
  },

  onGetBookComment() {
    wx.request({
      url: 'http://localhost:3001/v1/book/1120/short_comment',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
      }
    })
  },

  onBookHotKeyword() {
    wx.request({
      url: 'http://localhost:3001/v1/book/hot_keyword',
      method: 'GET',
      header: {
        Authorization: this._encode()
      },
      success: (res) => {
        console.log(res)
        console.log(res.data)
      }
    })
  },

  _encode() {
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token + ':')
    // 返回数据格式：Basic base64(account: password)
    return 'Basic ' + base64
  }

})