import { post, put, get, del, request } from '@utils/request.js';

//保存今日操盘
export async function addEvent(params) {
  return await post(`/addEvent`, params);
}

//获取今日操盘列表
export async function listEvent(params) {
  return await post(`/listEvent`, params);
}

//获取今日操盘
export async function getEvent(params) {
  return await get(`/getEvent/` + params['id'], {});
}

//删除今日操盘
export async function deleteEvent(params) {
  return await del(`/deleteEvent/` + params, {});
}

//编辑今日操盘
export async function editEvent(params) {
  return await post(`/editEvent`, params);
}
