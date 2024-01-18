import { storage, tokenTableName } from '@/config'
import cookie from 'js-cookie'

/**
 * @description 获取token
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(tokenTableName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(tokenTableName)
    } else if ('cookie' === storage) {
      return cookie.get(tokenTableName)
    } else {
      return localStorage.getItem(tokenTableName)
    }
  } else {
    return localStorage.getItem(tokenTableName)
  }
}

/**
 * @description 存储token
 * @param token
 * @returns {void|*}
 */
export function setToken(token: string) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenTableName, token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenTableName, token)
    } else if ('cookie' === storage) {
      return cookie.set(tokenTableName, token)
    } else {
      return localStorage.setItem(tokenTableName, token)
    }
  } else {
    return localStorage.setItem(tokenTableName, token)
  }
}

/**
 * @description 移除token
 * @returns {void|Promise<void>}
 */
export function removeToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenTableName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else if ('cookie' === storage) {
      return cookie.remove(tokenTableName)
    } else {
      return localStorage.removeItem(tokenTableName)
    }
  } else {
    return localStorage.removeItem(tokenTableName)
  }
}
export function setUserInfoMsg(userInfo) {
  if (storage) {
   if ('localStorage' === storage) {
     return localStorage.setItem('userInfo',JSON.stringify(userInfo))
   } else if ('sessionStorage' === storage) {
     return sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
   } else if ('cookie' === storage) {
    //  return cookie.setItem('userInfo',JSON.stringify(userInfo))
   } else {
     return localStorage.setItem('userInfo',JSON.stringify(userInfo))
   }
 } else {
   return localStorage.setItem('userInfo',JSON.stringify(userInfo))
 }
}
export function getUserInfoMsg() {
  if (storage) {
    if ('localStorage' === storage) {
      return JSON.parse(localStorage.getItem('userInfo'))||{}
    } else if ('sessionStorage' === storage) {
      return JSON.parse(sessionStorage.getItem('userInfo'))||{}
    } else if ('cookie' === storage) {
      // return JSON.parse(cookie.getItem('userInfo'))||{}
    } else {
      return JSON.parse(localStorage.getItem('userInfo'))||{}
    }
  } else {
    return JSON.parse(localStorage.getItem('userInfo'))||{}
  }
}