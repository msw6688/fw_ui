/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}
export function downloadFile(data, name) {
  // 文件导出
  if (!data) {
    return
  }
  const url = window.URL.createObjectURL(new Blob([data]))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', name + '.xls')
  document.body.appendChild(link)
  link.click()
}

const Bucket = 'test-1252901182'
const Region = 'ap-guangzhou'
const protocol = location.protocol === 'https:' ? 'https:' : 'http:'
const prefix = protocol + '//' + Bucket + '.cos.' + Region + '.myqcloud.com/'

export function uploadImage(e) {
  var _self = this
  var file = e.file
  var Key = 'images/' + file.name // 这里指定上传目录和文件名
  getAuthorization({ Method: 'PUT', Key: Key }, function(auth) {
    var url = prefix + Key
    var xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('Authorization', auth)
    xhr.onload = function() {
      if (xhr.status === 200 || xhr.status === 206) {
        // urlSend = url
        // return url
      } else {
        // _self.$message({
        //   message: "文件 " + Key + " 上传失败，状态码：" + xhr.status,
        //   type: "warning",
        //   showClose: true,
        //   duration: 2000
        // });
      }
    }
    xhr.onerror = function() {
      // _self.$message({
      //   message:
      //       "文件 " + Key + " 上传失败，请检查是否没配置 CORS 跨域规则",
      //   type: "warning",
      //   showClose: true,
      //   duration: 2000
      // });
    }
    xhr.send(file)
  })

  return prefix + Key
}

export function getAuthorization(options, callback) {
  var method = (options.Method || 'get').toLowerCase()
  var key = options.Key || ''
  var pathname = key.indexOf('/') === 0 ? key : '/' + key
  const urlHeard = process.env.VUE_APP_BASE_API
  var url = urlHeard + 'common/getCosToken'
  var xhr = new XMLHttpRequest()
  var data = {
    method: method,
    pathname: pathname
  }
  xhr.open('GET', url, true)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function(e) {
    if (e.target.responseText === 'action deny') {
      // this.$message({
      //   message: "action deny",
      //   type: "warning",
      //   showClose: true,
      //   duration: 2000
      // });
    } else {
      callback(e.target.responseText)
    }
  }

  xhr.send(JSON.stringify(data))
}
