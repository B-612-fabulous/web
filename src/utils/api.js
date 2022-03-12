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
  getCommunityAnnounceList(param) {
    return post(`/getCommunityAnnounceList`, param)
  },
  getUserList(param) {
    return post(`/getUserList`, param)
  },
  addUser(param) {
    return post(`/reg`, param)
  },
  deleteCommunityVegetablesList(param) {
    return post(`/deleteCommunityVegetablesList`, param)
  },
  updateCommunityVegetablesList(param) {
    return post(`/updateCommunityVegetablesList`, param)
  },
  deleteUserByid(param) {
    return post(`deleteUserByid`, param)
  },
  updateByid(param) {
    return post(`/updateByid`, param)
  },
  getIdleZoneList(param) {
    return post(`/getIdleZoneList`, param)
  }
}
