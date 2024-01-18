import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA } from '@/config'

export async function login(data: any) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url:  process.env.NODE_ENV=='production'?'/login':'http://test.erp.bigoffs.cn/login',
    method: 'post',
    data,
  })
}

export async function socialLogin(data: any) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: '/socialLogin',
    method: 'post',
    data,
  })
}
export async function getMenu(data) {
  return request({
    baseURL:"baseAdminURL",
    url: '/v1/index/menu',
    method: 'post',
    data,
    headers: {
      "X-UserId": localStorage.getItem("uid"),
      "X-Nickname": encodeURIComponent(localStorage.getItem("nickname")),
      "Content-Type": "application/json",
      "Request-Type": "api-request",
      Authorization: localStorage.getItem("authorization")
    },
  })

}
export function getUserInfo() {
  return request({
    url: '/userInfo',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  })
}

export function register(data: any) {
  return request({
    url: '/register',
    method: 'post',
    data,
  })
}
