import { get, post, del } from './httpServer'

export const server = {

  // 用户登录
  userLogin(body) {
    return post(`/login`, body)
  },
  addCommunityVegetables(param) {
    return post(`/addCommunityVegetables`, param)
  },
  getCommunityVegetablesList(param) {
    return post(`/getCommunityVegetablesList`, param)
  },
  addUser(param) {
    return post(`/reg`, param)
  }
}
