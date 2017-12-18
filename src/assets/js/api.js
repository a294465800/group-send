import axios from 'axios'
import qs from 'qs'
import {
  MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const host = 'http://103.85.24.76:8800/'

axios.defaults.timeout = 20000
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(config => {
  //在发送 post 请求请设置一下数据格式
  if (config.method === 'post' || config.method === 'put') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  console.log('错误的传参！')
  return Promise.reject(error)
})

export default {
  host: host,

  /**
   * 出错提示函数
   * @param {object} error 错误对象 {return_code, return_msg}
   */
  APIError(error) {
    MessageBox.alert(error ? error.data.msg : error, '出错啦', {
      confirmButtonText: '确定',
    })
  },

  /**
   * 登录 api
   * @param {object} data 用户的登录信息 {username, password}
   * @param {function} cb 回调
   */
  login(data, cb) {
    axios.post(`${host}user/login`, data)
      .then(res => {
        if (0 === res.data.status) {
          typeof cb === 'function' && cb(res)
        } else {
          this.APIError(res)
        }
      }).catch(error => {
        this.APIError(error.response)
      })
  },

  /**
   * 获取审核内容列表
   * @param {Object} data {page_index, page_size, check}
   * @param {Function} cb 回调
   */
  getAuditList(data, cb) {
    axios.get(`${host}baoke/all_content`, {
        params: data
      })
      .then(res => {
        if (0 === res.data.status) {
          typeof cb === 'function' && cb(res)
        } else {
          this.APIError(res)
        }
      }).catch(error => {
        this.APIError(error.response)
      })
  },

  /**
   * 获取链接列表
   * @param {Object} data {page_index, page_size, id}
   * @param {Function} cb 回调
   */
  getAuditLinks(data, cb) {
    axios.get(`${host}manager/api_info`, {
        params: data
      })
      .then(res => {
        if (0 === res.data.status) {
          typeof cb === 'function' && cb(res)
        } else {
          this.APIError(res)
        }
      }).catch(error => {
        this.APIError(error.response)
      })
  },

  /**
   * 提交新增链接内容
   * @param {Object} data {content, times}
   * @param {Function} cb 
   */
  postAuditLink(data, cb) {
    axios.post(`${host}manager/api_info`, data)
      .then(res => {
        if (0 === res.data.status) {
          typeof cb === 'function' && cb(res)
        } else {
          this.APIError(res)
        }
      }).catch(error => {
        this.APIError(error.response)
      })
  },

  /**
   * 修改链接内容
   * @param {Object} data {content, times}
   * @param {Function} cb 回调
   */
  putAuditLink(id, data, cb) {
    axios.put(`${host}manager/api_info/${id}`, data)
      .then(res => {
        if (0 === res.data.status) {
          typeof cb === 'function' && cb(res)
        } else {
          this.APIError(res)
        }
      }).catch(error => {
        this.APIError(error.response)
      })
  }
}
