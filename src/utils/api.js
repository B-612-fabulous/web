import { get, post, del } from './httpServer'

export const server = {

  // 用户登录
  userLogin(body) {
    return post(`/login`, body)
  },
  // 增加送菜信息
  addCommunityVegetables(param) {
    return post(`/addCommunityVegetables`, param)
  },
  // 获取菜品列表
  getCommunityVegetablesList(param) {
    return post(`/getCommunityVegetablesList`, param)
  },
  // 获取公告列表
  getCommunityAnnounceList(param) {
    return post(`/getCommunityAnnounceList`, param)
  },
  // 获取用户列表
  getUserList(param) {
    return post(`/getUserList`, param)
  },
  // 增加用户
  addUser(param) {
    return post(`/reg`, param)
  },
  // 删除菜品信息
  deleteCommunityVegetablesList(param) {
    return post(`/deleteCommunityVegetablesList`, param)
  },
  // 修改菜品信息
  updateCommunityVegetablesList(param) {
    return post(`/updateCommunityVegetablesList`, param)
  },
  // 修改用户资料
  updateByid(param) {
    return post(`/updateByid`, param)
  },
  // 删除用户
  deleteUserByid(param) {
    return post(`deleteUserByid`, param)
  },
  // 获取闲置用品列表
  getIdleZoneList(param) {
    return post(`getIdleZoneList`, param)
  },
  // 删除公告
  deleteCommunityAnnounce(param) {
    return post(`deleteCommunityAnnounce`, param)
  },
  updateCommunityAnnounce(param) {
    return post(`/updateCommunityAnnounce`, param)
  },
  getHolidaTtravelList(param) {
    return post(`/getHolidaTtravelList`, param)
  },
  getHousekeepingServicesList(param) {
    return post(`/getHousekeepingServicesList`, param)
  },
  deleteHousekeepingServices(param) {
    return post(`/deleteHousekeepingServices`, param)
  },
  upadteIdHousekeepingServices(param) {
    return post(`/upadteIdHousekeepingServices`, param)
  },
  deleteHolidaTtravel(param) {
    return post(`/deleteHolidaTtravel`, param)
  },
  upadteIdHolidaTtravel(param) {
    return post(`/upadteIdHolidaTtravel`, param)
  },
  addCommunityAnnounce(param) {
    return post(`/addCommunityAnnounce`, param)
  },
  // 删除闲置物品deleteIdleZone
  deleteIdleZone(param) {
    return post(`/deleteIdleZone`, param)
  },
  updateIdleZone(param) {
    return post(`/updateIdleZone`, param)
  },
  
  addIIdleZone(param) {
    return post(`/addIIdleZone`, param)
  },
  addHolidaTtravel(param) {
    return post(`/addHolidaTtravel`, param)
  },
  addHousekeepingServices(param) {
    return post(`/addHousekeepingServices`, param)
  },
  updateByTruename(param) {
    return post(`/updateByTruename`, param)
  },


}
