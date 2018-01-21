import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/user/list.do',
    method: 'get',
    params
  })
}

export function userUpdate(params) {
  return request({
    url: '/user/update.do',
    method: 'post',
    params
  })
}

export function userRegister(params) {
  return request({
    url: '/user/register.do',
    method: 'post',
    params
  })
}
