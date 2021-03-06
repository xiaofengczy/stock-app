import qs from 'qs';
import { fetch } from 'dva';
import { history } from 'umi';
import { SERVICE_PRE_FIX } from './config';

// checkStatus
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// request
export default async function request(url, params) {
  const { method = 'GET', body, ...other } = params || {};
  const newParams = { method, credentials: 'include', ...other };

  if (method !== 'GET') {
    if (!(body instanceof FormData)) {
      newParams.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newParams.headers,
      };
      newParams.body = JSON.stringify(body);
    }
  } else {
    // 增加时间戳 避免IE缓存 仅 GET
    const t = new Date().getTime();
    const new_query = { ...body, t };
    url = `${url}?${qs.stringify(new_query)}`;
  }

  newParams.headers = {
    ...newParams.headers,
    credentials: 'include',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };
  newParams.mode = 'cors';
  const response = await fetch(`${SERVICE_PRE_FIX}${url}`, newParams);
  checkStatus(response);
  let res = await response.json();
  return res;
}

//
export async function get(path, params) {
  return request(path, { method: 'GET', body: params });
}

export async function post(path, params) {
  return request(path, { method: 'POST', body: params });
}

export async function del(path, params, options) {
  return request(path, { method: 'DELETE', body: params }, options);
}

export async function put(path, params, options) {
  return request(path, { method: 'PUT', body: params }, options);
}
