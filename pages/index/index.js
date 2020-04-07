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

  _encode() {
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token + ':')
    // 返回数据格式：Basic base64(account: password)
    return 'Basic ' + base64
  }

})