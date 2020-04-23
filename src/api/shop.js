import request from '@/utils/request'

// 公告中心
export function noticeList(data) {
  return request({
    url: 'notice/findList',
    method: 'post',
    params: data
  })
}

export function noticeDetail(data) {
  return request({
    url: 'notice/get',
    method: 'post',
    params: data
  })
}

// 发布任务

export function create(data) {
  return request({
    url: 'task/create',
    method: 'post',

    params: data
  })
}

export function selectYwTaskTypeList(data) {
  return request({
    url: 'task/selectYwTaskTypeList',
    method: 'post',
    params: data
  })
}

export function selectYwTaskScreenshotCategoryList(data) {
  return request({
    url: 'task/selectYwTaskScreenshotCategoryList',
    method: 'post',
    params: data
  })
}

export function selectYwTaskSortWayList(data) {
  return request({
    url: 'task/selectYwTaskSortWayList',
    method: 'post',
    params: data
  })
}
export function selectYwCourierCompanyList(data) {
  return request({
    url: 'task/selectYwCourierCompanyList',
    method: 'post',
    params: data
  })
}
export function selectYwGoodsCategoryList(data) {
  return request({
    url: 'task/selectYwGoodsCategoryList',
    method: 'get',
    params: {}
  })
}
export function selectYwTaskActivityTypeList(data) {
  return request({
    url: 'task/selectYwTaskActivityTypeList',
    method: 'post',
    params: data
  })
}

export function getPrice(data) {
  return request({
    url: 'task/getPrice',
    method: 'post',
    params: data
  })
}
export function pay(data) {
  return request({
    url: 'task/pay',
    method: 'post',
    params: data
  })
}
export function selectYwTaskFeeConfig() {
  return request({
    url: 'task/selectYwTaskFeeConfig',
    method: 'post',
    params: {}
  })
}

// 店铺管理
export function getStoreList(data) {
  return request({
    url: 'business/getStoreList',
    method: 'post',
    params: data
  })
}
export function getStoreTypeList() {
  return request({
    url: 'business/getStoreTypeList',
    method: 'get',
    params: {}
  })
}

export function addStore(data) {
  return request({
    url: 'business/addStore',
    method: 'post',
    params: data
  })
}

export function editStore(data) {
  return request({
    url: 'business/editStore',
    method: 'post',
    params: data
  })
}

// 资金明细
export function selectYwCapitalRecordList(data) {
  return request({
    url: 'business/selectYwCapitalRecordList',
    method: 'post',
    params: data
  })
}

export function exportYwCapitalRecordList(data) {
  return request({
    url: 'business/exportYwCapitalRecordList',
    method: 'post',
    params: data
  })
}

export function addCommission(data) {
  return request({
    url: 'business/addCommission',
    method: 'post',
    params: data
  })
}

// 任务管理

export function taskFindList(data) {
  return request({
    url: 'task/findList',
    method: 'post',
    params: data
  })
}
export function taskDetail(data) {
  return request({
    url: 'task/get',
    method: 'post',
    params: data
  })
}

// 订单管理
export function orderList(data) {
  return request({
    url: 'order/findList',
    method: 'post',
    params: data
  })
}

export function orderConfirmOrder(data) {
  return request({
    url: 'order/confirmOrder',
    method: 'post',
    params: data
  })
}
export function orderGetDetail(data) {
  return request({
    url: 'order/getDetail',
    method: 'post',
    params: data
  })
}
export function orderSubstitution(data) {
  return request({
    url: 'order/substitution',
    method: 'post',
    params: data
  })
}
export function orderUpdateRefundsAmount(data) {
  return request({
    url: 'order/updateRefundsAmount',
    method: 'post',
    params: data
  })
}

// 快递代发
export function addYwGiftOrder(data, file) {
  return request({
    url: 'business/addYwGiftOrder',
    method: 'post',
    params: data,
    data: file,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }

  })
}
export function addEmptyOrder(data, file) {
  return request({
    url: 'business/addEmptyOrder',
    method: 'post',
    params: data,
    data: file,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
export function downExcl(data) {
  return request({
    url: 'business/downExcl',
    method: 'post',
    params: data
  })
}
export function upGiftExcel(data, file) {
  return request({
    url: 'business/upGiftExcel',
    method: 'post',
    params: data,
    data: file,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
export function upEmptyExcel(data, file) {
  return request({
    url: 'business/upEmptyExcel',
    method: 'post',
    params: data,
    data: file,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
export function getYwCourierCompany(data) {
  return request({
    url: 'business/getYwCourierCompany',
    method: 'post',
    params: data
  })
}
export function selectYwGiftList() {
  return request({
    url: 'business/selectYwGiftList',
    method: 'post',
    params: {}
  })
}

// 代发管理

export function selectYwGiftOrderlList(data) {
  return request({
    url: 'business/selectYwGiftOrderlList',
    method: 'post',
    params: data
  })
}

export function exportYwGiftOrderlList(data) {
  return request({
    url: 'business/exportYwGiftOrderlList',
    method: 'get',
    responseType: 'blob',
    params: data
  })
}
export function downYwGiftOrderDetaillList(data) {
  return request({
    url: 'business/downYwGiftOrderDetaillList',
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

// 单号管理
export function selectYwGiftOrderDetaillList(data) {
  return request({
    url: 'business/selectYwGiftOrderDetaillList',
    method: 'post',
    params: data
  })
}
export function exportYwGiftOrderDetaillList(data) {
  return request({
    url: 'business/exportYwGiftOrderDetaillList',
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

export function selectYwOrderCourierList(data) {
  return request({
    url: 'business/selectYwOrderCourierList',
    method: 'post',
    params: data
  })
}

// 申诉中心
export function selectYwAppealList(data) {
  return request({
    url: 'business/selectYwAppealList',
    method: 'post',
    params: data
  })
}
export function addYwAppeal(data) {
  return request({
    url: 'business/addYwAppeal',
    method: 'post',
    params: data
  })
}
export function getYwAppeal(data) {
  return request({
    url: 'business/getYwAppeal',
    method: 'post',
    params: data
  })
}
export function endYwAppeal(data) {
  return request({
    url: 'business/endYwAppeal',
    method: 'post',
    params: data
  })
}
export function removeYwAppeal(data) {
  return request({
    url: 'business/removeYwAppeal',
    method: 'post',
    params: data
  })
}
