import { get, post, del } from './httpServer'

export const server = {

  // 用户登录
  userLogin(body) {
    return post(`/login`, body)
  }
}
