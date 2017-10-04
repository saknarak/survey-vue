const moment = require('moment')

function genNamespace(module, types) {
  const newObj = {}

  Object.keys(types).forEach((type) => {
    newObj[type] = {}
    Object.keys(types[type]).forEach((key) => {
      newObj[type][key] = module + ':' + key
    })
  })
  return newObj
}

function checkAcl(acl, right) {
  // return right.reduce((prev, r) => prev || acl.indexOf(r) >= 0, false)
  if (!acl || acl.length === 0) {
    return true
  }
  for (let i = 0; i < acl.length; i++) {
    if (right.indexOf(acl[i]) >= 0) {
      return true
    }
  }
  return false
}

function genTimeRangeText(times) {
  if (times.length === 0) {
    return 'ALL TIME'
  }
  return times.map(time => time.join('-')).join(', ')
}

function genDateRangeText(dates) {
  if (dates.length === 0) {
    return 'EVERY DAY'
  }
  return dates.map(date => {
    let fromDate = date[0].split('-')
    let toDate = date[1].split('-')
    if (fromDate.length !== 3 || toDate.length !== 3) {
      return 'N/A'
    }
    if (fromDate[0] !== toDate[0]) {
      return moment(date[0]).format('D MMM YY') + ' - ' + moment(date[1]).format('D MMM YY')
    } else if (fromDate[1] !== toDate[1]) {
      return moment(date[0]).format('D MMM') + ' - ' + moment(date[1]).format('D MMM YY')
    } else if (fromDate[2] !== toDate[2]) {
      return parseInt(fromDate[2]) + '-' + parseInt(toDate[2]) + moment(date[1]).format(' MMM YY')
    } else {
      return moment(date[0]).format('D MMM YY')
    }
  }).join(', ')
}

function normalizeDow(dow) {
  if (dow.indexOf('ALL') >= 0) {
    return ['ALL']
  }
  if (dow.length >= 7) {
    return ['ALL']
  }
  return dow
}

function timeMatrixText(matrix) {
  let cnt = 0
  let dow = []
  let dowText = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  let span = 0
  if (matrix.length === 0) {
    return ''
  }
  for (let r = 0; r < 7; r++) {
    let cntDow = 0
    let tmp = []
    let start = false
    span = 0
    for (let c = 0; c < 24; c++) {
      let v = matrix[r][c]
      if (!start && v === 1) {
        tmp.push(('0' + c).substr(-2))
        start = true
        span = 0
      } else if (start && v === 1) {
        span++
      } else if (start && v === 0) {
        if (span > 0) {
          tmp[tmp.length - 1] = tmp[tmp.length - 1] + '-' + ('0' + (c - 1)).substr(-2)
        }
        start = false
        span = 0
      }
      if (v === 1) {
        cntDow++
        cnt++
      }
    }
    if (start && span > 0) {
      tmp[tmp.length - 1] = tmp[tmp.length - 1] + '-23'
    }
    if (cntDow === 24) {
      dow.push(dowText[r])
    } else if (tmp.length > 0) {
      dow.push(dowText[r] + '[' + tmp.join(',') + ']')
    }
  }
  if (cnt === 7 * 24) {
    return 'ALWAYS'
  } else if (dow.length > 0) {
    return dow.join(', ')
  } else {
    return 'NONE'
  }
}

export default {
  genNamespace,
  checkAcl,
  genTimeRangeText,
  genDateRangeText,
  normalizeDow,
  timeMatrixText,
}
